"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _expressRateLimit = require("express-rate-limit");
var _helmet = _interopRequireDefault(require("helmet"));
var _Users_routes = _interopRequireDefault(require("./api/routes/Users/Users_routes"));
var app = exports.app = (0, _express["default"])();
//	RATE LIMIT, THE PROCESS OF LIMITING THE NUMBER OF USER/CLIENT REQUSET ON CERTAIN RESOURCES
var limiter = (0, _expressRateLimit.rateLimit)({
  windowMs: 15 * 60 * 1000,
  //15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too much pressing the screen please wait a while longer !!"
});

//		MIDDLEWARE
app.use(function (req, res, next) {
  // WEBSITE YOU WISH TO ALLOW TO CONNECT
  req.headers["Access-control-allow-origin"] = "*";

  // REQUEST METHOD YOU WISH TO ALLOW
  req.headers["Access-control-allow-methods"] = "GET, POST, PUT, DELETE, OPTIONS, PATCH";

  // REQUEST HEADERS YOU WISH TO ALLOW
  req.headers["Access-control-allow-headers"] = "Content-Type, Authorization";
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  // PASS TO NEXT LAYER OF MIDDLEWARE
  next();
});
app.use((0, _cors["default"])({
  origin: "*"
}));
app.use((0, _helmet["default"])({
  crossOriginResourcePolicy: false
}));
app.use(limiter);
app.use(_express["default"].json({
  limit: "100mb"
}));
app.use(_express["default"].urlencoded({
  extended: false
}));

//        ROUTES
app.use("/api", _Users_routes["default"]);
app.use(function (req, res, next) {
  var error = new Error("Not Found!");
  res.status(404);
  next(error);
});