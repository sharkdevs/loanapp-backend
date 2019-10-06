'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Loans', [
      {
        amount: 3000,
        UserId: 1,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
      {
        amount: 7000,
        UserId: 3,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
      {
        amount: 8000,
        UserId: 2,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
      {
        amount: 78000,
        UserId: 4,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
      {
        amount: 3200,
        UserId: 5,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
      {
        amount: 4400,
        UserId: 6,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
      {
        amount: 9834,
        UserId: 7,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
