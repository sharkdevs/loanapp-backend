'use strict';

module.exports = function (sequelize, DataTypes) {
  var Role = sequelize.define('Role', {
    roleName: DataTypes.STRING
  }, {});
  Role.associate = function (models) {};
  return Role;
};