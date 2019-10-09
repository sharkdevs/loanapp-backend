'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.belongsTo(models.Role);
    User.belongsTo(models.LoanManager);
    User.hasOne(models.Loan);
  };
  return User;
};