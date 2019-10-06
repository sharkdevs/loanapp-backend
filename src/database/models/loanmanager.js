'use strict';
module.exports = (sequelize, DataTypes) => {
  const FarmersLoanManager = sequelize.define('FarmersLoanManager', {
    comment: DataTypes.STRING
  }, {});
  FarmersLoanManager.associate = function(models) {
    FarmersLoanManager.belongsTo(models.User);
  };
  return FarmersLoanManager;
};