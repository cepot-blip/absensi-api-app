"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersUpdate = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _Models = require("../../../models/Models");
var UsersUpdate = exports.UsersUpdate = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
      res,
      data,
      checkUniqueId,
      checkUniqueEmail,
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
          data = _context.sent;
          _context.next = 8;
          return _Models.UsersModels.findUnique({
            where: {
              id: data.id
            }
          });
        case 8:
          checkUniqueId = _context.sent;
          _context.next = 11;
          return _Models.UsersModels.findUnique({
            where: {
              email: data.email
            }
          });
        case 11:
          checkUniqueEmail = _context.sent;
          if (checkUniqueId) {
            _context.next = 14;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            success: false,
            message: 'Id not found!'
          }));
        case 14:
          if (!checkUniqueEmail) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            success: false,
            message: 'Email already exist!'
          }));
        case 16:
          _context.next = 18;
          return _Models.UsersModels.update({
            where: {
              id: parseInt(data.id)
            },
            data: {
              email: data.email,
              password: data.password
            }
          });
        case 18:
          res.status(201).json({
            success: true,
            msg: "Successfully update users!"
          });
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            success: false,
            error: _context.t0.message
          });
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 21]]);
  }));
  return function UsersUpdate() {
    return _ref.apply(this, arguments);
  };
}();