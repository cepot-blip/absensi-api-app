"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersDelete = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _Models = require("../../../models/Models");
var UsersDelete = exports.UsersDelete = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
      res,
      _yield$req$body,
      id,
      checkId,
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
          id = _yield$req$body.id;
          _context.next = 9;
          return _Models.UsersModels.findUnique({
            where: {
              id: parseInt(id)
            }
          });
        case 9:
          checkId = _context.sent;
          if (checkId) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(404).json({
            success: false,
            message: 'Id not found!'
          }));
        case 12:
          _context.next = 14;
          return _Models.UsersModels["delete"]({
            where: {
              id: parseInt(id)
            }
          });
        case 14:
          res.status(200).json({
            success: true,
            msg: "Successfully delete users!"
          });
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            success: false,
            error: _context.t0.message
          });
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 17]]);
  }));
  return function UsersDelete() {
    return _ref.apply(this, arguments);
  };
}();