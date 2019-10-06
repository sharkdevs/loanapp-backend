'use strict';
module.exports = (sequelize, DataTypes) => {
  const Loan = sequelize.define('Loan', {
    amount: DataTypes.STRING
  }, {});
  Loan.associate = function(models) {
    Loan.hasMany(models.Payment);

  };
  return Loan;
};