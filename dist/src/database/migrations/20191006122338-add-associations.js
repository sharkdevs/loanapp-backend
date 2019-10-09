'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {

    return queryInterface.addColumn('Users', 'RoleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }).then(function () {
      return queryInterface.addColumn('LoanManagers', 'RoleId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
    }).then(function () {
      return queryInterface.addColumn('Users', 'LoanManagerId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'LoanManagers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
    }).then(function () {
      return queryInterface.addColumn('Loans', 'UserId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
    }).then(function () {
      return queryInterface.addColumn('Payments', 'LoanId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Loans',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      });
    });
  },

  down: function down(queryInterface, Sequelize) {

    return queryInterface.removeColumn('Users', 'RoleId').then(function () {
      return queryInterface.removeColumn('Loans', 'UserId');
    }).then(function () {
      return queryInterface.removeColumn('Payments', 'LoanId');
    });
  }
};