'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _FarmersController = require('../controllers/FarmersController');

var _FarmersController2 = _interopRequireDefault(_FarmersController);

var _OfficerController = require('../controllers/OfficerController');

var _OfficerController2 = _interopRequireDefault(_OfficerController);

var _AuthController = require('../controllers/AuthController');

var _AuthController2 = _interopRequireDefault(_AuthController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var apiPrefix = '/api/v1/';

router.get('/', function (req, res) {
  res.send('Welcome to Loan APIs');
});
router.get(apiPrefix + 'farmers', _FarmersController2.default.getAllFarmers);

router.get(apiPrefix + 'farmers/:id', _FarmersController2.default.getFarmer);

router.get(apiPrefix + 'managers', _OfficerController2.default.getLoanOfficers);

router.post(apiPrefix + 'managers', _OfficerController2.default.getLoanOfficers);

router.post(apiPrefix + 'auth/register', _AuthController2.default.createUser);

exports.default = router;