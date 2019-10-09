'use strict';

module.exports = function (sequelize, DataTypes) {
  var LoanManager = sequelize.define('LoanManager', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  LoanManager.associate = function (models) {
    LoanManager.hasMany(models.User);
  };
  return LoanManager;
};