'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OfficerService = require('../services/OfficerService');

var _OfficerService2 = _interopRequireDefault(_OfficerService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OfficerController = function () {
  function OfficerController() {
    _classCallCheck(this, OfficerController);
  }

  _createClass(OfficerController, null, [{
    key: 'getLoanOfficers',
    value: async function getLoanOfficers(req, res) {
      var officerData = await _OfficerService2.default.getLoanOfficer();
      res.status(200).json({
        message: 'successfully Retrieved',
        officerData: officerData
      });
    }
  }]);

  return OfficerController;
}();

exports.default = OfficerController;