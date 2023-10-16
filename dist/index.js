"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _app = require("./app");
_dotenv["default"].config();
var PORT = process.env.PORT;

//		LISTENER
_app.app.listen(PORT, function () {
  console.log("\n\t=====================================\n  \n\t L I S T E N  T O  P O R T ".concat(PORT, " :D\n  \n\t=====================================\n\t"));
}).on('error', function (err) {
  console.error("Error starting server: ".concat(err.message));
});