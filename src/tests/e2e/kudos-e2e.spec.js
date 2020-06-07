import app from '../../app';
import request from 'supertest';
import { knex } from '../../config';
import knexConfig from './../../../knexfile';

beforeEach(async (done) => {
  await knex.migrate.rollback(knexConfig);
  await knex.migrate.latest(knexConfig);
  await knex.seed.run(knexConfig);
  done();
});

describe('Kudos e2e', () => {
  describe('Giving a Kudos ', () => {
    test('it should be given a kudos correctly', async () => {
      const userFrom = await knex('users').first('id');
      const userTo = await knex('users')
        .whereNot({ id: Number(userFrom.id) })
        .first('id');
      const kudo = await knex('kudos').first('id');

      const response = await request(app).post('/api/v1/kudos').send({
        kudo_id: kudo.id,
        from_user_id: userFrom.id,
        to_user_id: userTo.id,
        comment: 'test',
      });
      expect(response.status).toBe(201);
    });
    test('it should return 404', async () => {
      const response = await request(app).post('/api/v1/kudos').send({
        kudo_id: null,
        from_user_id: null,
        to_user_id: null,
        comment: 'test',
      });
      expect(response.status).toBe(400);
    });
  });
});
