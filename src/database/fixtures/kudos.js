const faker = require('faker');

const kudos = [
  { id: faker.random.uuid(), name: 'I learned' },
  { id: faker.random.uuid(), name: 'Was awesome' },
  { id: faker.random.uuid(), name: "I'm grateful" },
];

module.exports = kudos;
