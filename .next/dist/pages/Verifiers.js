'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _ispeak = require('../ethereum/ispeak');

var _ispeak2 = _interopRequireDefault(_ispeak);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project11Matic\\ISpeak\\pages\\Verifiers.js?entry';


var Verifiers = function (_Component) {
  (0, _inherits3.default)(Verifiers, _Component);

  function Verifiers(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Verifiers);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Verifiers.__proto__ || (0, _getPrototypeOf2.default)(Verifiers)).call(this, props));

    _this.handleChange = function (event, _ref) {
      var name = _ref.name,
          value = _ref.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.handleonload = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, hashes, requests, reqarray, count1, i, req2, count3;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                //console.log(count);
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                requests = void 0;

                console.log(accounts[0]);

                _context.next = 8;
                return _ispeak2.default.methods.gethash().call({
                  from: accounts[0]
                });

              case 8:
                hashes = _context.sent;
                reqarray = new Array(hashes.length);
                count1 = 0;
                i = 0;

              case 12:
                if (!(i < hashes.length)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 15;
                return _ispeak2.default.methods.getrequest(hashes[i].toString()).call({
                  from: accounts[0]
                });

              case 15:
                reqarray[i] = _context.sent;

                if (reqarray[i][4] == "No") count1 = count1 + 1;

              case 17:
                i++;
                _context.next = 12;
                break;

              case 20:
                req2 = new Array(count1);
                count3 = 0;
                i = 0;

              case 23:
                if (!(i < hashes.length)) {
                  _context.next = 31;
                  break;
                }

                _context.next = 26;
                return _ispeak2.default.methods.getrequest(hashes[i].toString()).call({
                  from: accounts[0]
                });

              case 26:
                reqarray[i] = _context.sent;

                if (reqarray[i][4] == "No") {
                  req2[count3] = reqarray[i];
                  count3 = count3 + 1;
                }

              case 28:
                i++;
                _context.next = 23;
                break;

              case 31:
                _this.setState({ hist2: req2 });

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleaccept = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var t, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                console.log("h", _this.state.hist2);
                t = document.getElementById('abcd').innerHTML = _this.state.hist2[parseInt(_this.state.count.toString())][0];

                _this.setState({ count: parseInt(_this.state.count.toString()) + parseInt("1") });
                console.log("t", t);
                _context2.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context2.sent;
                _context2.next = 10;
                return _ispeak2.default.methods.givepermit(t.toString()).send({
                  from: accounts[0]
                });

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.handlereject = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var accounts, perm;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context3.sent;

                alert("Rejected");
                perm = "Not";
                _context3.next = 7;
                return _ispeak2.default.methods.setRequest(_this.state.hist2[parseInt(_this.state.count.toString())][0].toString(), _this.state.hist2[parseInt(_this.state.count.toString())][1].toString(), _this.state.hist2[parseInt(_this.state.count.toString())][2].toString(), _this.state.hist2[parseInt(_this.state.count.toString())][3].toString(), perm.toString()).send({
                  from: accounts[0]
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.state = {
      hist2: [], count: "0", disab: []
    };
    _this.handleonload = _this.handleonload.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleaccept = _this.handleaccept.bind(_this);
    return _this;
  }
  //handleClose = () => this.setState({ modalOpen: false })


  (0, _createClass3.default)(Verifiers, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement('div', { className: 'e-card e-card-horizontal', __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'black', onLoad: this.handleonload, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement('center', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('u', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, 'Recent Proofs to verify'))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement(_semanticUiReact.Item.Group, { link: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, this.state.hist2.map(function (item) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, ' ', _react2.default.createElement(_semanticUiReact.Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, _react2.default.createElement(_semanticUiReact.Item.Image, { size: 'medium', src: 'https://ipfs.io/ipfs/' + item[0], __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }), _react2.default.createElement(_semanticUiReact.Item.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, _react2.default.createElement(_semanticUiReact.Item.Header, { href: 'https://ipfs.io/ipfs/' + item[0], target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react2.default.createElement('font', { color: 'black', __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, item[1]))), _react2.default.createElement(_semanticUiReact.Item.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, item[2])), _react2.default.createElement(_semanticUiReact.Item.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, _react2.default.createElement('font', { color: 'grey', id: 'abcd', __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, item[0]))), _react2.default.createElement(_semanticUiReact.Button, { icon: true, size: 'big', onClick: _this3.handleaccept, __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'check', color: 'green', __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        })), _react2.default.createElement(_semanticUiReact.Button, { icon: true, size: 'big', onClick: _this3.handlereject, __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'cancel', color: 'red', __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }))), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }), _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }));
      })))))));
    }
  }]);

  return Verifiers;
}(_react.Component);

exports.default = Verifiers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxWZXJpZmllcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIkxheW91dCIsIkZvcm0iLCJNb2RhbCIsIkhlYWRlciIsIkljb24iLCJJdGVtIiwiQnV0dG9uIiwiR3JpZCIsIklucHV0IiwiRHJvcGRvd24iLCJNZW51IiwiUmFkaW8iLCJNZXNzYWdlIiwiU2VnbWVudCIsIkNoZWNrYm94IiwiQ2FyZCIsIkltYWdlIiwiQ29uZmlybSIsImlzcGVhayIsIndlYjMiLCJWZXJpZmllcnMiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwic3RhdGUiLCJoYXNPd25Qcm9wZXJ0eSIsInNldFN0YXRlIiwiaGFuZGxlb25sb2FkIiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwicmVxdWVzdHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImdldGhhc2giLCJjYWxsIiwiZnJvbSIsImhhc2hlcyIsInJlcWFycmF5IiwiQXJyYXkiLCJsZW5ndGgiLCJjb3VudDEiLCJpIiwiZ2V0cmVxdWVzdCIsInRvU3RyaW5nIiwicmVxMiIsImNvdW50MyIsImhpc3QyIiwiaGFuZGxlYWNjZXB0IiwidCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJwYXJzZUludCIsImNvdW50IiwiZ2l2ZXBlcm1pdCIsInNlbmQiLCJoYW5kbGVyZWplY3QiLCJhbGVydCIsInBlcm0iLCJzZXRSZXF1ZXN0IiwiZGlzYWIiLCJiaW5kIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQ0g7Ozs7QUFFRixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFBSyxBQUNMLEFBQU8sQUFDUCxBQUNBLEFBQ0EsQUFD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