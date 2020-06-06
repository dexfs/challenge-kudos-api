const faker = require('faker');
const kudos = require('./../fixtures/kudos');
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('kudos')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('kudos').insert(kudos);
    });
};
