"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRead = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _Models = require("../../../models/Models");
var UsersRead = exports.UsersRead = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var req,
      res,
      _yield$req$query,
      _yield$req$query$page,
      page,
      _yield$req$query$limi,
      limit,
      skip,
      _yield$req$body,
      filter,
      result,
      conn,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          req = _args.length > 0 && _args[0] !== undefined ? _args[0] : _express.request;
          res = _args.length > 1 && _args[1] !== undefined ? _args[1] : _express.response;
          _context.prev = 2;
          _context.next = 5;
          return req.query;
        case 5:
          _yield$req$query = _context.sent;
          _yield$req$query$page = _yield$req$query.page;
          page = _yield$req$query$page === void 0 ? 1 : _yield$req$query$page;
          _yield$req$query$limi = _yield$req$query.limit;
          limit = _yield$req$query$limi === void 0 ? 10 : _yield$req$query$limi;
          skip = (page - 1) * limit;
          _context.next = 13;
          return req.body;
        case 13:
          _yield$req$body = _context.sent;
          filter = _yield$req$body.filter;
          _context.next = 17;
          return _Models.UsersModels.findMany({
            skip: parseInt(skip),
            take: parseInt(limit),
            orderBy: {
              id: "desc"
            },
            where: filter
          });
        case 17:
          result = _context.sent;
          _context.next = 20;
          return _Models.UsersModels.count();
        case 20:
          conn = _context.sent;
          res.status(200).json({
            success: true,
            current_page: parseInt(page),
            total_page: Math.ceil(conn / limit),
            total_data: conn,
            query: result
          });
          _context.next = 27;
          break;
        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](2);
          res.status(500).json({
            success: false,
            error: _context.t0.message
          });
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 24]]);
  }));
  return function UsersRead() {
    return _ref.apply(this, arguments);
  };
}();