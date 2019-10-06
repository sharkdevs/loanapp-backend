'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FarmersLoanManagers', [
      {
        FarmerId: 1,
        ManagerId: 7,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        comment: "average"
      },
      {
        FarmerId: 2,
        ManagerId:7,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        comment: "average"
      },
      {
        FarmerId: 3,
        ManagerId: 6,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        comment: "average"
      },
      {
        FarmerId: 5,
        ManagerId: 7,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        comment: "average"
      },
      {
        FarmerId: 4,
        ManagerId: 6,
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        comment: "average"
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
