'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../database/models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = _models2.default.User,
    LoanManager = _models2.default.LoanManager,
    Loan = _models2.default.Loan,
    Payment = _models2.default.Payment;

var OfficerService = function () {
  function OfficerService() {
    _classCallCheck(this, OfficerService);
  }

  _createClass(OfficerService, null, [{
    key: 'getLoanOfficer',
    value: async function getLoanOfficer() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var managers = await LoanManager.findAll({
        where: params,
        include: [{
          model: User,
          include: [{
            model: Loan,
            include: [{ model: Payment }]
          }]
        }]
      });
      return managers;
    }
  }]);

  return OfficerService;
}();

exports.default = OfficerService;