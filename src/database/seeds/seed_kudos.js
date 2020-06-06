const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('kudos')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('kudos').insert([
        { id: faker.random.uuid(), name: 'I learned' },
        { id: faker.random.uuid(), name: 'Was awesome' },
        { id: faker.random.uuid(), name: "I'm grateful" },
      ]);
    });
};
