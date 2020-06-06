const faker = require('faker');
const kudos = require('./kudos');

const generateUsers = () => {
  return [
    {
      id: faker.random.uuid(),
      email: faker.internet.email().toLowerCase(),
      name: faker.name.findName(),
    },
    {
      id: faker.random.uuid(),
      email: faker.internet.email().toLowerCase(),
      name: faker.name.findName(),
    },
    {
      id: faker.random.uuid(),
      email: faker.internet.email().toLowerCase(),
      name: faker.name.findName(),
    },
    {
      id: faker.random.uuid(),
      email: faker.internet.email().toLowerCase(),
      name: faker.name.findName(),
    },
  ];
};
/*
- id (uuid) - public
- kudos_id (primary)
- user_id (primary)
- quantity

*/
const generateUserKudos = () => {
  const userKudos = [];
  generateUsers().forEach((user) => {
    kudos.forEach((kudo) => {
      userKudos.push({ kudo_id: kudo.id, user_id: user.id });
    });
  });
  return userKudos;
};

module.exports = { generateUsers, generateUserKudos };
