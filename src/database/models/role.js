'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    roleName: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
  };
  return Role;
};