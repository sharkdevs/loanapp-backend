'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LoanManagers', [
      
      {
        firstName: 'Pereowei',
        lastName: 'Kimani',
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        RoleId: 2
      },
      {
        firstName: 'Pumpkin',
        lastName: 'Seeds',
        createdAt: '2019-11-14',
        updatedAt: '2019-11-14',
        RoleId: 2
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
