import { v4 as uuidv4 } from 'uuid';
import { knex } from '../../config';

export const give = async ({ kudo_id, from_user_id, to_user_id, comment }) => {
  const trx = await knex.transaction();
  try {
    const actions = await trx('kudo_actions').transacting(trx).insert({
      id: uuidv4(),
      kudo_id,
      from_user_id,
      to_user_id,
      comment,
    });

    const userKudos = await knex('user_kudos')
      .where({ kudo_id, user_id: from_user_id })
      .transacting(trx)
      .decrement({
        quantity: 1,
      });

    await trx.commit();
    return { actions, userKudos };
  } catch (error) {
    await trx.rollback();
    throw error;
  }
};
