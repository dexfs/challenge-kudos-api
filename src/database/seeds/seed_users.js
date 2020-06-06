const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
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
      ]);
    });
};
