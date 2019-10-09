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
    Role = _models2.default.Role,
    Loan = _models2.default.Loan,
    Payment = _models2.default.Payment,
    LoanManager = _models2.default.LoanManager;

var FarmersService = function () {
  function FarmersService() {
    _classCallCheck(this, FarmersService);
  }

  _createClass(FarmersService, null, [{
    key: 'getFarmers',
    value: async function getFarmers(params) {
      var farmers = await User.findAll({
        where: params,
        include: [{ model: Role }, { model: LoanManager }, {
          model: Loan,
          include: [{
            model: Payment
          }]
        }]
      });
      return farmers;
    }
  }]);

  return FarmersService;
}();

exports.default = FarmersService;