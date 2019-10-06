'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payments', [
      {
        amountPaid: 1000,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        LoanId: 1
      },
      {
        amountPaid: 400,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        LoanId: 1
      },
      {
        amountPaid: 260,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        LoanId: 1
      },
      {
        amountPaid: 3000,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        LoanId: 2
      }
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
