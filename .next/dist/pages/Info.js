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

var _semanticUiCalendarReact = require('semantic-ui-calendar-react');

var _ispeak = require('../ethereum/ispeak');

var _ispeak2 = _interopRequireDefault(_ispeak);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project11Matic\\ISpeak\\pages\\Info.js?entry';

//import Select from 'react-select';


var Info = function (_Component) {
  (0, _inherits3.default)(Info, _Component);

  function Info(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Info);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Info.__proto__ || (0, _getPrototypeOf2.default)(Info)).call(this, props));

    _this.handleChange = function (event, _ref) {
      var name = _ref.name,
          value = _ref.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.handleonload = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, hashes, requests, reqarray, k, count, i;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
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

                console.log(hashes.length);
                reqarray = new Array(hashes.length);
                count = 0;
                i = 0;

              case 13:
                if (!(i < hashes.length)) {
                  _context.next = 23;
                  break;
                }

                console.log("i=", i);
                _context.next = 17;
                return _ispeak2.default.methods.getrequest(hashes[i].toString()).call({
                  from: accounts[0]
                });

              case 17:
                k = _context.sent;

                console.log("k=", k);
                if (k[4] == "Yes") {
                  reqarray[count] = k;
                  count = count + 1;
                }

              case 20:
                i = i + 1;
                _context.next = 13;
                break;

              case 23:
                console.log(reqarray);
                _this.setState({ hist2: reqarray });

              case 25:
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

    _this.state = {
      hist2: []
    };
    _this.handleonload = _this.handleonload.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  //handleClose = () => this.setState({ modalOpen: false })

  (0, _createClass3.default)(Info, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement('div', { className: 'e-card e-card-horizontal', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'black', onLoad: this.handleonload, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement('center', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('u', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Recent Proofs to visit'))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, this.state.hist2.map(function (item) {
        return _react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: 'https://ipfs.io/ipfs/' + item[0], wrapped: true, ui: false, __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, item[1]), _react2.default.createElement(_semanticUiReact.Card.Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react2.default.createElement('span', { className: 'date', href: 'https://ipfs.io/ipfs/' + item[0], target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, item[3])), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, item[2])), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react2.default.createElement('div', { className: 'ui buttons', __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', href: 'https://ipfs.io/ipfs/' + item[0], target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, 'View'))), _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, 'sample text \xA0 '));
      }))))));
    }
  }]);

  return Info;
}(_react.Component);

exports.default = Info;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxJbmZvLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJMYXlvdXQiLCJGb3JtIiwiTW9kYWwiLCJIZWFkZXIiLCJJY29uIiwiSXRlbSIsIkJ1dHRvbiIsIkdyaWQiLCJJbnB1dCIsIkRyb3Bkb3duIiwiTWVudSIsIlJhZGlvIiwiTWVzc2FnZSIsIlNlZ21lbnQiLCJDaGVja2JveCIsIkNhcmQiLCJJbWFnZSIsIkNvbmZpcm0iLCJEYXRlSW5wdXQiLCJpc3BlYWsiLCJ3ZWIzIiwiSW5mbyIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJzdGF0ZSIsImhhc093blByb3BlcnR5Iiwic2V0U3RhdGUiLCJoYW5kbGVvbmxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJyZXF1ZXN0cyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiZ2V0aGFzaCIsImNhbGwiLCJmcm9tIiwiaGFzaGVzIiwibGVuZ3RoIiwicmVxYXJyYXkiLCJBcnJheSIsImNvdW50IiwiaSIsImdldHJlcXVlc3QiLCJ0b1N0cmluZyIsImsiLCJoaXN0MiIsImJpbmQiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFDSDs7OztBQUVGLEFBQU87Ozs7QUFHUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUFLLEFBQ0wsQUFBTyxBQUNQLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQVMsQUFBSyxBQUNkOztBQUVGLEFBQ0U7O0FBRUYsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7QUFyQmpCOzs7SSxBQXNCcUI7Z0NBQ25COztnQkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSUFBQSxBQUNYOztVQURXLEFB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QUFBQSx5QkFBSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIWixBQUdBLEFBQVEsQUFBSSxBQUNaOztvQkFBQTtzQkFKQSxBQUlBLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFMQSxBQUtBLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFOQSxBQU1BLEFBQ0E7QUFEQTtBQUFBLDBCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFHTztBQUhQO0FBQUEsY0FHTyxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksZ0JBQUE7K0JBSW5CLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0g7QUFERztBQUFBLFNBQUEsa0JBQ0gsQUFBQyx3Q0FBTSwrQkFBNkIsS0FBcEMsQUFBb0MsQUFBSyxJQUFPLFNBQWhELE1BQXdELElBQXhELEFBQTREO3NCQUE1RDt3QkFERyxBQUNILEFBQ0E7QUFEQTs0QkFDQyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0M7QUFERDtBQUFBLDJCQUNFLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFBYztBQUFkO0FBQUEsZ0JBREQsQUFDQyxBQUFjLEFBQUssQUFDakIscUJBQUMsY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNGO0FBREU7QUFBQSwyQkFDRixjQUFBLFVBQU0sV0FBTixBQUFnQixRQUFPLGdDQUE4QixLQUFyRCxBQUFxRCxBQUFLLElBQU0sUUFBaEUsQUFBdUU7c0JBQXZFO3dCQUFBLEFBQWlGO0FBQWpGO2dCQUhELEFBRUcsQUFDRixBQUFpRixBQUFLLEFBRXBGLHNCQUFDLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSTtBQURKO0FBQUEsZ0JBUEEsQUFFSCxBQUtHLEFBQ0ksQUFBSyxBQUdaLHNCQUFDLGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQ7c0JBQUE7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLEFBQUMseUNBQU8sT0FBUixNQUFjLE9BQWQsQUFBb0IsU0FBUSxnQ0FBOEIsS0FBMUQsQUFBMEQsQUFBSyxJQUFNLFFBQXJFLEFBQTRFO3NCQUE1RTt3QkFBQTtBQUFBO1dBYkQsQUFXSCxBQUNFLEFBQ0UsQUFNSiwyQkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0F2QnNCLEFBSW5CLEFBbUJIO0FBekNKLEFBQ0UsQUFJUixBQUNFLEFBRUUsQUFPQSxBQUdPLEFBeUNOOzs7OztBQWxIK0IsQTs7a0JBQWIsQSIsImZpbGUiOiJJbmZvLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkY6L1Byb2plY3QxMU1hdGljL0lTcGVhayJ9