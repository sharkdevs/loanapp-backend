'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    amountPaid: DataTypes.STRING
  }, {});
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};