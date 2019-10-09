'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FarmerService = require('../services/FarmerService');

var _FarmerService2 = _interopRequireDefault(_FarmerService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FarmersController = function () {
  function FarmersController() {
    _classCallCheck(this, FarmersController);
  }

  _createClass(FarmersController, null, [{
    key: 'getAllFarmers',
    value: async function getAllFarmers(req, res) {
      var params = {
        RoleId: 1
      };
      await FarmersController.farmerQueryMethod(params, req, res);
    }
  }, {
    key: 'getFarmer',
    value: async function getFarmer(req, res) {
      var params = {
        RoleId: 1,
        id: req.params.id
      };
      await FarmersController.farmerQueryMethod(params, req, res);
    }
  }, {
    key: 'farmerQueryMethod',
    value: async function farmerQueryMethod(params, req, res) {
      var farmers = await _FarmerService2.default.getFarmers(params);
      res.status(200).json({
        message: 'successfully retrieved farmers',
        farmers: farmers
      });
    }
  }]);

  return FarmersController;
}();

exports.default = FarmersController;