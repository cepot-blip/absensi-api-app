"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersCreate = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _Models = require("../../../models/Models");
_dotenv["default"].config();
var salt = _bcryptjs["default"].genSaltSync(10);
var UsersCreate = exports.UsersCreate = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
      res,
      _yield$req$body,
      email,
      password,
      checkUniqueEmail,
      createUsers,
      token,
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
          checkUniqueEmail = _context.sent;
          if (!checkUniqueEmail) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            status: false,
            message: "Email already exist"
          }));
        case 13:
          _context.next = 15;
          return _Models.UsersModels.create({
            data: {
              email: email,
              password: _bcryptjs["default"].hashSync(password, salt),
              token: token
            }
          });
        case 15:
          createUsers = _context.sent;
          _context.next = 18;
          return _jsonwebtoken["default"].sign({
            app_name: process.env.APP_NAME,
            id: createUsers.id,
            email: createUsers.email
          }, process.env.API_SECRET);
        case 18:
          token = _context.sent;
          res.status(201).json({
            success: true,
            msg: "Successfuly created users!",
            token: token
          });
          _context.next = 25;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            success: false,
            error: _context.t0.message
          });
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 22]]);
  }));
  return function UsersCreate() {
    return _ref.apply(this, arguments);
  };
}();