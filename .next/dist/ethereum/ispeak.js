'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ispeak = require('./build/ispeak.json');

var _ispeak2 = _interopRequireDefault(_ispeak);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_ispeak2.default.interface), '0x31a628704fEC26C4071E8b51845C65a7Ff20B918');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxpc3BlYWsuanMiXSwibmFtZXMiOlsid2ViMyIsImlzcGVhayIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFtQixBQUFuQjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLGlCQUFPLEFBQWxCLEFBRGUsWUFDZSxBQURmLEFBQWpCLEFBR0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiaXNwZWFrLmpzIiwic291cmNlUm9vdCI6IkY6L1Byb2plY3QxMU1hdGljL0lTcGVhayJ9