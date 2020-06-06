const { generateUsers, generateUserKudos } = require('./../fixtures/users');
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(generateUsers());
    })
    .then(function () {
      return knex('user_kudos').insert(generateUserKudos());
    });
};
