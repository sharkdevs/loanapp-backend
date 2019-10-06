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
        'LoanManagers',
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
      )
    }).then(() => {
      return queryInterface.addColumn(
        'Users',
        'LoanManagerId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'LoanManagers',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
    }).then(() => {
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
    });
  }
};
