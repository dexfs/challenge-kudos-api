import { knex } from '../../config';
import * as usersService from '../../app/services/users-service';
import knexConfig from './../../../knexfile';

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
});
