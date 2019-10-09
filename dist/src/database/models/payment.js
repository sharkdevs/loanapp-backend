'use strict';

module.exports = function (sequelize, DataTypes) {
  var Payment = sequelize.define('Payment', {
    amountPaid: DataTypes.STRING
  }, {});
  Payment.associate = function (models) {
    // associations can be defined here
  };
  return Payment;
};