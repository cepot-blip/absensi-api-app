"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressRateLimit = require("express-rate-limit");
var _Users = require("../../controllers/Users");
var users_routes = _express["default"].Router();
var LimitLogin = (0, _expressRateLimit.rateLimit)({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many request from this IP, please try again after 15 minutes"
});

//      CREATE ROUTES USERS
users_routes.post("/users/create", _Users.UsersCreate);
users_routes.post("/users/login", LimitLogin, _Users.UsersLogin);
users_routes.post("/users/read", _Users.UsersRead);
users_routes.put("/users/update", _Users.UsersUpdate);
users_routes["delete"]("/users/delete", _Users.UsersDelete);
var _default = exports["default"] = users_routes;