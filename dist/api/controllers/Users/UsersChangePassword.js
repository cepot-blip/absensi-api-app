"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersChangePassword = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _Models = require("../../../models/Models");
var salt = _bcryptjs["default"].genSaltSync(10);
var UsersChangePassword = exports.UsersChangePassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
      res,
      _yield$req$body,
      oldPassword,
      newPassword,
      email,
      findUsers,
      compareOldPassword,
      hashNewPassword,
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
          oldPassword = _yield$req$body.oldPassword;
          newPassword = _yield$req$body.newPassword;
          email = _yield$req$body.email;
          findUsers = _Models.UsersModels.findUnique({
            where: {
              email: email
            }
          });
          if (findUsers) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            success: false,
            msg: "Email Not Found!"
          }));
        case 12:
          _context.next = 14;
          return _bcryptjs["default"].compareSync(oldPassword, findUsers.password);
        case 14:
          compareOldPassword = _context.sent;
          if (compareOldPassword) {
            _context.next = 17;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            success: false,
            msg: "Wrong old password"
          }));
        case 17:
          _context.next = 19;
          return _bcryptjs["default"].hashSync(newPassword, salt);
        case 19:
          hashNewPassword = _context.sent;
          _context.next = 22;
          return _Models.UsersModels.update({
            where: {
              email: email
            },
            data: {
              password: hashNewPassword
            }
          });
        case 22:
          res.status(200).json({
            success: true,
            msg: "Successfully changed password!"
          });
          _context.next = 28;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            success: false,
            error: _context.t0.message
          });
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 25]]);
  }));
  return function UsersChangePassword() {
    return _ref.apply(this, arguments);
  };
}();