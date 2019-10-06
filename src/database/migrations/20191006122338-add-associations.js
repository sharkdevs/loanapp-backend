'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'Users',
      'RoleId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ).then(() => {
      return queryInterface.addColumn(
        'Loans',
        'UserId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    }).then(() => {
      return queryInterface.addColumn(
        'Payments',
        'LoanId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Loans',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    }).then(() => {
      return queryInterface.addColumn(
        'FarmersLoanManagers',
        'FarmerId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
    }).then(() => {
      return queryInterface.addColumn(
        'FarmersLoanManagers',
        'ManagerId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'Users',
      'RoleId'
    ).then(() => {
      return queryInterface.removeColumn(
        'Loans',
        'UserId'
      );
    }).then(() => {
      return queryInterface.removeColumn(
        'Payments',
        'LoanId'
      );
    }).then(() => {
      return queryInterface.removeColumn(
        'LoanManagers',
        'FarmerId'
      );
    }).then(() => {
      return queryInterface.removeColumn(
        'LoanManagers',
        'ManagerId'
      );
    });
  }
};
