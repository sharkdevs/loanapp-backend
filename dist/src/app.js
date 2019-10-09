'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apiRouter = require('./router/apiRouter.js');

var _apiRouter2 = _interopRequireDefault(_apiRouter);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();
app.use((0, _cors2.default)());
app.use(_apiRouter2.default);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(process.env.DATABASE_URL);
  console.log('Server started on http://127.0.0.1:' + port);
});