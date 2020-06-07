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
