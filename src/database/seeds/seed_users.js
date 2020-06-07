const { generateUsers, generateUserKudos } = require('./../fixtures/users');
const usersSeed = generateUsers();
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(usersSeed);
    })
    .then(function (result) {
      knex('user_kudos')
        .del()
        .then(function () {
          return knex('user_kudos').insert(generateUserKudos(usersSeed));
        });
    });
};
