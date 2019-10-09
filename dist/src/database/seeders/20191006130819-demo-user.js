'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@gmail.com',
      createdAt: '2019-11-14',
      updatedAt: '2019-11-14',
      RoleId: 1,
      LoanManagerId: 1
    }, {
      firstName: 'Samwel',
      lastName: 'Kalis',
      email: 'sam.kal@gmail.com',
      createdAt: '2019-11-14',
      updatedAt: '2019-11-14',
      RoleId: 1,
      LoanManagerId: 1
    }, {
      firstName: 'Paull',
      lastName: 'Kamel',
      email: 'pail.kam@gmail.com',
      createdAt: '2019-11-14',
      updatedAt: '2019-11-14',
      RoleId: 1,
      LoanManagerId: 2
    }, {
      firstName: 'patrick',
      lastName: 'Jam',
      email: 'pat.jam@gmail.com',
      createdAt: '2019-11-14',
      updatedAt: '2019-11-14',
      RoleId: 1,
      LoanManagerId: 1
    }, {
      firstName: 'James',
      lastName: 'Samling',
      email: 'james.samling@gmail.com',
      createdAt: '2019-11-14',
      updatedAt: '2019-11-14',
      RoleId: 1,
      LoanManagerId: 2
    }, {
      firstName: 'Lim',
      lastName: 'Start',
      email: 'john.smith@gmail.com',
      createdAt: '2019-11-14',
      updatedAt: '2019-11-14',
      RoleId: 1,
      LoanManagerId: 1
    }, {
      firstName: 'Janet',
      lastName: 'Mali',
      email: 'john.smith@gmail.com',
      createdAt: '2019-11-14',
      updatedAt: '2019-11-14',
      RoleId: 1,
      LoanManagerId: 1
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};