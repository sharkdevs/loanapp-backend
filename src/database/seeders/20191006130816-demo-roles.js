'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        roleName: 'Farmer',
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
      {
        roleName: 'Loan Officer',
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14'
      },
      {
        roleName: 'Credit Manager',
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
