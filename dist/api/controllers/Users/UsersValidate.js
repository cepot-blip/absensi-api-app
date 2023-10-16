"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersValidate = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
_dotenv["default"].config();
var UsersValidate = exports.UsersValidate = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
      res,
      _yield$req$body,
      token,
      decryptToken,
      verify,
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
          token = _yield$req$body.token;
          _context.next = 9;
          return _cryptoJs["default"].AES.decrypt(token, process.env.API_SECRET).toString(_cryptoJs["default"].enc.Utf8);
        case 9:
          decryptToken = _context.sent;
          _context.next = 12;
          return _jsonwebtoken["default"].verify(decryptToken, process.env.API_SECRET);
        case 12:
          verify = _context.sent;
          if (verify) {
            _context.next = 16;
            break;
          }
          res.status(401).json({
            success: false,
            msg: "Users has expired, Please Login Again!"
          });
          return _context.abrupt("return");
        case 16:
          res.status(201).json({
            success: true,
            msg: "Authorization Users!",
            query: _jsonwebtoken["default"].decode(decryptToken)
          });
          _context.next = 22;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            success: false,
            error: _context.t0.message
          });
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 19]]);
  }));
  return function UsersValidate() {
    return _ref.apply(this, arguments);
  };
}();