import { knex } from '../../config';

export const all = async () => {
  return await knex('users');
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

  let user = await knex('users').where({ id }).first('*');
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
