import { knex } from '../../config';
import * as kudosService from '../../app/services/kudos-service';
import knexConfig from './../../../knexfile';

describe('Kudos Service', () => {
  beforeEach(async () => {
    await knex.migrate.rollback(knexConfig);
    await knex.migrate.latest(knexConfig);
    await knex.seed.run(knexConfig);
  });

  it('should save a given kudos corretly', async () => {
    const userFrom = await knex('users').first('id');
    const userTo = await knex('users')
      .whereNot({ id: userFrom.id })
      .first('id');

    const kudo = await knex('kudos').first('id');
    await kudosService.give({
      kudo_id: kudo.id,
      from_user_id: userFrom.id,
      to_user_id: userTo.id,
      comment: 'test',
    });
    const givenKudo = await knex('kudo_actions').where({
      kudo_id: kudo.id,
      from_user_id: userFrom.id,
      to_user_id: userTo.id,
    });
    const userFromUpdated = await knex('user_kudos')
      .where({
        user_id: userFrom.id,
        kudo_id: kudo.id,
      })
      .first();
    // console.log({ givenKudo, userFromUpdated });
    expect(givenKudo).toHaveLength(1);
    expect(userFromUpdated.quantity).toBe(1);
  });

  it('should return an error if invalid data', async () => {
    const result = async () => {
      await kudosService.give({
        kudo_id: null,
        from_user_id: null,
        to_user_id: null,
        comment: null,
      });
    };

    await expect(result()).rejects.toThrow();
  });
});
