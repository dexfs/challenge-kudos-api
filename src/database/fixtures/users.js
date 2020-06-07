const faker = require('faker');
const kudos = require('./kudos');

const generateUsers = () => {
  return [
    {
      id: 176013,
      login: 'wesbos',
      avatar_url: 'https://avatars2.githubusercontent.com/u/176013?v=4',
      github_profile: 'https://github.com/wesbos',
      name: 'Wes Bos',
    },
    {
      login: 'dexfs',
      id: 745268,
      avatar_url: 'https://avatars3.githubusercontent.com/u/745268?v=4',
      github_profile: 'https://github.com/dexfs',
      name: 'André Santos',
    },
    {
      id: 4606725,
      login: 'badtuxx',
      avatar_url: 'https://avatars0.githubusercontent.com/u/4606725?v=4',
      github_profile: 'https://github.com/badtuxx',
      name: 'Jeferson Fernando',
    },
    {
      id: 804684,
      login: 'mpociot',
      avatar_url: 'https://avatars2.githubusercontent.com/u/804684?v=4',
      github_profile: 'https://github.com/mpociot',
      name: 'Marcel Pociot',
    },
    {
      login: 'gcmatheusj',
      id: 38117213,
      avatar_url: 'https://avatars1.githubusercontent.com/u/38117213?v=4',
      github_profile: 'https://github.com/gcmatheusj',
      name: 'Matheus Castro',
    },
  ];
};

const generateUserKudos = (users) => {
  const userKudos = [];
  users.forEach((user) => {
    kudos.forEach((kudo) => {
      userKudos.push({ kudo_id: kudo.id, user_id: user.id });
    });
  });
  return userKudos;
};

module.exports = { generateUsers, generateUserKudos };
