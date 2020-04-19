'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _ipfs = require('../pages/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project11Matic\\ISpeak\\pages\\Speakers.js?entry';
//import Select from 'react-select';


var Speakers = function (_Component) {
  (0, _inherits3.default)(Speakers, _Component);

  function Speakers(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Speakers);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Speakers.__proto__ || (0, _getPrototypeOf2.default)(Speakers)).call(this, props));

    _this.handleonsubmit = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log("handle submit");
                console.log(_this.state.buffer);
                _ipfs2.default.files.add(_this.state.buffer, function (error, result) {
                  if (error) {
                    console.error(error);
                    return;
                  }
                  _this.setState({ ipfshash: result[0].hash });
                  console.log('ipfshash', _this.state.ipfshash);
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handlecapture = function (event) {
      console.log("handle capture");
      event.preventDefault();

      var file = event.target.files[0];
      var reader = new window.FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = function () {
        _this.setState({ buffer: Buffer(reader.result) });
        console.log("buffer", _this.state.buffer);
      };
    };

    _this.handleSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this.setState({ open: true, loading: true });
              //console.log(this.state.id + this.state.toc + this.state.fromc + this.state.fno+this.state.tno+this.state.date+this.state.defcheck+this.state.emailid);

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleCancel = function () {
      return _this.setState({
        open: false,
        loading: false
      });
    };

    _this.handleconf = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var accounts, perm;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                _this.setState({
                  open: false
                });
                //console.log(parseInt(this.state.quant)+10);
                //console.log(this.state.id + this.state.toc + this.state.fromc + this.state.fno+this.state.tno+this.state.date+this.state.defcheck+this.state.emailid);
                _context3.prev = 2;
                _context3.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context3.sent;

                console.log(accounts[0]);
                //await trackpass.methods.storegold(reacth,(this.state.id).toString(),(this.state.quant).toString(),(this.state.toc).toString(),(this.state.fromc).toString(),(this.state.expl).toString(),parseInt(this.state.billamt)).send({
                //from: accounts[0]
                //});
                perm = "No";
                _context3.next = 10;
                return _ispeak2.default.methods.setRequest(_this.state.ipfshash.toString(), _this.state.title.toString(), _this.state.description.toString(), _this.state.verifier.toString(), perm.toString()).send({
                  from: accounts[0]
                });

              case 10:

                _this.setState({
                  loading: false,
                  title: '',
                  ipfshash: '',
                  description: '',
                  verifier: '',
                  defcheck: false
                });
                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3['catch'](2);

                console.log(_context3.t0);
                _this.setState({
                  loading: false,
                  open: false
                });

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[2, 13]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.handleChange = function (event, _ref4) {
      var name = _ref4.name,
          value = _ref4.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.state = {
      options: _this.options,
      value: null,
      defcheck: false,
      open: false,
      modalOpen: false,
      title: '',
      description: '',
      verifier: '', buffer: null, ipfshash: ''
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handlecapture = _this.handlecapture.bind(_this);
    _this.handleonsubmit = _this.handleonsubmit.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    _this.handleconf = _this.handleconf.bind(_this);
    return _this;
  }
  //handleClose = () => this.setState({ modalOpen: false })


  (0, _createClass3.default)(Speakers, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, ' ', _react2.default.createElement('font', { color: 'white', __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, 'User\'s Portal'), ' '), ' ', _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { attached: true, header: 'Welcome to your own space!',
        content: 'Speak your heart out here with evidence!',
        icon: 'searchengin',
        color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Title',
        fluid: true, ref: function ref(input) {
          _this3.title = input;
        }
        //  labelPosition=""
        , value: this.state.title,
        onChange: function onChange(event) {
          return _this3.setState({
            title: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Description',

        fluid: true, ref: function ref(input) {
          _this3.description = input;
        }
        //labelPosition=""
        , value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({
            description: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { label: 'Verifier',
        fluid: true, ref: function ref(input) {
          _this3.verifier = input;
        }
        //  labelPosition=""
        , value: this.state.verifier,
        onChange: function onChange(event) {
          return _this3.setState({
            verifier: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }))), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, 'Evidence:')), _react2.default.createElement('form', { onSubmit: this.handleonsubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement('input', { type: 'file', onChange: this.handlecapture, __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }), _react2.default.createElement('input', { type: 'submit', name: 'Upload', value: 'Upload', className: 'btn btn-primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree that all the information is correct and properly verified.',
        onChange: function onChange(event) {
          return _this3.setState({
            defcheck: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }), ' '), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading,
        disabled: this.state.title == '' || this.state.description == '' || this.state.verifier == '' || this.state.ipfshash == '' || this.state.defcheck == false,
        primary: true, onClick: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, ' Submit '), _react2.default.createElement(_semanticUiReact.Confirm, { open: this.state.open,
        cancelButton: 'Go Back',
        confirmButton: 'Confirm',
        onCancel: this.handleCancel,
        onConfirm: this.handleconf,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }))), ' '), ' '));
    }
  }]);

  return Speakers;
}(_react.Component);

exports.default = Speakers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxTcGVha2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiTGF5b3V0IiwiRm9ybSIsIk1vZGFsIiwiSGVhZGVyIiwiSWNvbiIsIkJ1dHRvbiIsIklucHV0IiwiRHJvcGRvd24iLCJNZW51IiwiUmFkaW8iLCJNZXNzYWdlIiwiU2VnbWVudCIsIkNoZWNrYm94IiwiQ29uZmlybSIsIkRhdGVJbnB1dCIsImlzcGVhayIsIndlYjMiLCJpcGZzIiwiU3BlYWtlcnMiLCJwcm9wcyIsImhhbmRsZW9uc3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImJ1ZmZlciIsImZpbGVzIiwiYWRkIiwiZXJyb3IiLCJyZXN1bHQiLCJzZXRTdGF0ZSIsImlwZnNoYXNoIiwiaGFzaCIsImhhbmRsZWNhcHR1cmUiLCJmaWxlIiwidGFyZ2V0IiwicmVhZGVyIiwid2luZG93IiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkZW5kIiwiQnVmZmVyIiwiaGFuZGxlU3VibWl0Iiwib3BlbiIsImxvYWRpbmciLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVjb25mIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInBlcm0iLCJtZXRob2RzIiwic2V0UmVxdWVzdCIsInRvU3RyaW5nIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZlcmlmaWVyIiwic2VuZCIsImZyb20iLCJkZWZjaGVjayIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5Iiwib3B0aW9ucyIsIm1vZGFsT3BlbiIsImJpbmQiLCJpbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQ0g7Ozs7QUFFRixBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQ0UsQUFDQSxBQUNBLEFB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LEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBa0IsTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQW5DLEFBQWdELE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFqRSxBQUEyRSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBNUYsQUFBc0csTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLFlBTHpILEFBS21JLEFBRW5JO2lCQVBBLE1BT1EsU0FDTixLQVJGLEFBUU87O29CQVJQO3NCQUFBO0FBQUE7U0FoR0EsQUFnR0EsQUFXQyw2QkFBQSxBQUNELDBDQUFRLE1BQ04sS0FBQSxBQUFLLE1BRk4sQUFFWSxBQUViO3NCQUpDLEFBSWMsQUFDZjt1QkFMQyxBQUtlLEFBQ2hCO2tCQUNFLEtBUEQsQUFPTSxBQUVQO21CQUNFLEtBVkQsQUFVTTs7b0JBVk47c0JBdEhELEFBR3FELEFBUXJELEFBMkdDO0FBQUE7WUF4SEQsQUFFQSxNQVBGLEFBQ0UsQUFJQSxBQTBJSDs7Ozs7QUF0UW1DLEE7O2tCQUFqQixBIiwiZmlsZSI6IlNwZWFrZXJzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkY6L1Byb2plY3QxMU1hdGljL0lTcGVhayJ9