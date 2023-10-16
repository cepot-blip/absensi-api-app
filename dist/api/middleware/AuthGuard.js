"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authCheck = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _cryptoJs = _interopRequireDefault(require("crypto-js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var authCheck = exports.authCheck = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
      res,
      next,
      token,
      decToken,
      verify,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          req = _args.length > 0 && _args[0] !== undefined ? _args[0] : _express.request;
          res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
          next = _args.length > 2 ? _args[2] : undefined;
          _context.prev = 3;
          _context.next = 6;
          return req.headers["authorization"];
        case 6:
          token = _context.sent;
          if (token) {
            _context.next = 10;
            break;
          }
          res.status(401).json({
            success: false,
            msg: "Login first to get tokens ?"
          });
          return _context.abrupt("return");
        case 10:
          _context.next = 12;
          return _cryptoJs["default"].AES.decrypt(token.split(" ")[1], process.env.API_SECRET).toString(_cryptoJs["default"].enc.Utf8);
        case 12:
          decToken = _context.sent;
          _context.next = 15;
          return _jsonwebtoken["default"].verify(decToken, process.env.API_SECRET);
        case 15:
          verify = _context.sent;
          if (verify) {
            _context.next = 19;
            break;
          }
          res.status(401).json({
            success: false,
            msg: "Login first to get tokens ?"
          });
          return _context.abrupt("return");
        case 19:
          if (!(verify.exp < Date.now() / 1000)) {
            _context.next = 22;
            break;
          }
          res.status(401).json({
            success: false,
            msg: "Token Expirited"
          });
          return _context.abrupt("return");
        case 22:
          next();
          _context.next = 28;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](3);
          res.status(401).json({
            success: false,
            msg: "Login first to get tokens ?"
          });
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 25]]);
  }));
  return function authCheck() {
    return _ref.apply(this, arguments);
  };
}();