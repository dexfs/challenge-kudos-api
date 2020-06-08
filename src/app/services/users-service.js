import { knex } from '../../config';
import groupBy from 'lodash/groupBy';

export const all = async (user) => {
  console.log({ user });
  try {
    const users = await knex('users').whereNot(
      'users.id',
      '=',
      Number(user.id)
    );

    return users;
  } catch (error) {
    throw error;
  }
};

export const findOrCreate = async (data) => {
  const {
    id,
    name,
    login,
    avatar_url,
    html_url: github_profile,
    access_token = '',
  } = data;

  if (!id) throw new Error('Não foi possível buscar ou criar o usuário');

  let user = await knex('users')
    .where('id', '=', Number(data.id))
    .first(['id', 'name', 'login', 'avatar_url', 'github_profile']);
  if (user) {
    return user;
  }

  user = await knex('users')
    .returning(['id', 'name', 'login', 'avatar_url', 'github_profile'])
    .insert({
      id,
      name,
      login,
      avatar_url,
      github_profile,
      access_token,
    });

  return user;
};

export const me = async (id) => {
  const user = await knex('users').where('users.id', '=', Number(id)).first();
  const userKudos = await knex
    .select(
      'user_kudos.quantity',
      'user_kudos.kudo_id',
      'kudos.name as kudo_name'
    )
    .from('user_kudos')
    .where('user_kudos.user_id', '=', Number(id))
    .joinRaw('INNER JOIN kudos ON kudos.id::text = user_kudos.kudo_id::text');

  return { ...user, userKudos };
};
