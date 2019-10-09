'use strict';

module.exports = function (sequelize, DataTypes) {
  var Loan = sequelize.define('Loan', {
    amount: DataTypes.STRING
  }, {});
  Loan.associate = function (models) {
    Loan.hasMany(models.Payment);
  };
  return Loan;
};