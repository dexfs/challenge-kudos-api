import { knex } from '../../config';
import * as usersService from '../../app/services/users-service';
import knexConfig from './../../../knexfile';
import { newUser, userExists } from './../fixtures/users';
describe('Users Service', () => {
  beforeEach(async () => {
    await knex.migrate.rollback(knexConfig);
    await knex.migrate.latest(knexConfig);
    await knex.seed.run(knexConfig);
  });
  describe('List', () => {
    it('should be listed correctly', async () => {
      const users = await usersService.all();
      expect(users).toHaveLength(5);
    });
  });
  describe('New User', () => {
    it('it should create the user if no exists.', async () => {
      const user = await usersService.findOrCreate(newUser);

      expect(user).not.toBeUndefined();
      expect(user[0].name).toBe(newUser.name);
      expect(user[0].avatar_url).toBe(newUser.avatar_url);
      expect(user[0].github_profile).toBe(newUser.html_url);
      expect(user[0].login).toBe(newUser.login);
    });
  });
  describe('Exists User', () => {
    it('it should return the user if exists.', async () => {
      const user = await usersService.findOrCreate(userExists);

      expect(user).not.toBeUndefined();
      expect(user.name).toBe(userExists.name);
      expect(user.avatar_url).toBe(userExists.avatar_url);
      expect(user.github_profile).toBe(userExists.html_url);
      expect(user.login).toBe(userExists.login);
    });
  });
});
