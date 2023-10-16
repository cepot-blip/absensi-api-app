"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersLogin = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
var _Models = require("../../../models/Models");
_dotenv["default"].config();
var salt = _bcryptjs["default"].genSaltSync(10);
var UsersLogin = exports.UsersLogin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
      res,
      _yield$req$body,
      email,
      password,
      UsersCheck,
      comparePassword,
      token,
      hashToken,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          req = _args.length > 0 && _args[0] !== undefined ? _args[0] : _express.request;
          res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
          _context.prev = 2;
          _context.next = 5;
          return req.body;
        case 5:
          _yield$req$body = _context.sent;
          email = _yield$req$body.email;
          password = _yield$req$body.password;
          _context.next = 10;
          return _Models.UsersModels.findUnique({
            where: {
              email: email
            }
          });
        case 10:
          UsersCheck = _context.sent;
          if (UsersCheck) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            status: false,
            message: "Email not found!"
          }));
        case 13:
          _context.next = 15;
          return _bcryptjs["default"].compareSync(password, UsersCheck.password, salt);
        case 15:
          comparePassword = _context.sent;
          _context.next = 18;
          return _jsonwebtoken["default"].sign({
            app_name: process.env.APP_NAME,
            id: UsersCheck.id,
            email: UsersCheck.email
          }, process.env.API_SECRET, {
            expiresIn: "1d"
          });
        case 18:
          token = _context.sent;
          if (comparePassword) {
            _context.next = 21;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            status: false,
            message: "Password not match!"
          }));
        case 21:
          _context.next = 23;
          return _cryptoJs["default"].AES.encrypt(token, process.env.API_SECRET).toString();
        case 23:
          hashToken = _context.sent;
          res.setHeader("Access-Controll-Allow-Origin", "*");
          res.status(201).json({
            success: true,
            token: hashToken
          });
          _context.next = 31;
          break;
        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            success: false,
            error: _context.t0.message
          });
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 28]]);
  }));
  return function UsersLogin() {
    return _ref.apply(this, arguments);
  };
}();