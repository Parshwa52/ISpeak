'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _routes = require('../routes');

var _ispeak = require('../ethereum/ispeak');

var _ispeak2 = _interopRequireDefault(_ispeak);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'F:\\Project11Matic\\ISpeak\\pages\\index.js?entry';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.handleChange = function (event, _ref) {
      var name = _ref.name,
          value = _ref.value;

      if (_this.state.hasOwnProperty(name)) {
        _this.setState((0, _defineProperty3.default)({}, name, value));
      }
    };

    _this.state = {
      hist2: [], count: "0", disab: [], activeItem1: 'Speakers', activeItem2: 'Info', activeItem3: 'Verifiers'
    };
    _this.handleItemClick1 = _this.handleItemClick1.bind(_this);
    _this.handleItemClick2 = _this.handleItemClick2.bind(_this);
    _this.handleItemClick3 = _this.handleItemClick3.bind(_this);
    return _this;
  }
  //handleClose = () => this.setState({ modalOpen: false })


  (0, _createClass3.default)(Home, [{
    key: 'handleItemClick1',
    value: function handleItemClick1(event) {
      event.preventDefault();

      _routes.Router.pushRoute('/' + this.state.activeItem1);
    }
  }, {
    key: 'handleItemClick2',
    value: function handleItemClick2(event) {
      event.preventDefault();

      _routes.Router.pushRoute('/' + this.state.activeItem2);
    }
  }, {
    key: 'handleItemClick3',
    value: function handleItemClick3(event) {
      event.preventDefault();

      _routes.Router.pushRoute('/' + this.state.activeItem3);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement('div', { className: 'e-card e-card-horizontal', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Menu, { inverted: true, pointing: true, secondary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: 'Speakers',
        active: this.state.activeItem1 === 'Speakers',
        onClick: this.handleItemClick1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: 'Verifiers',
        active: this.state.activeItem3 === 'Verifiers',
        onClick: this.handleItemClick3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        name: 'Info',
        active: this.state.activeItem2 === 'Info',
        onClick: this.handleItemClick2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }))), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'grey', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('center', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Image, { src: '/static/82633.jpg', fluid: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement('font', { color: 'black', __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, 'Be a warrior and not a worrier.".Get true and real facts and happenings hidden from you without any bias from authentic people and sources and get a taste of reality rather than being in an illusion.')))))));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiTGF5b3V0IiwiRm9ybSIsIk1vZGFsIiwiSGVhZGVyIiwiSWNvbiIsIkl0ZW0iLCJCdXR0b24iLCJHcmlkIiwiSW5wdXQiLCJEcm9wZG93biIsIk1lbnUiLCJSYWRpbyIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiQ2hlY2tib3giLCJDYXJkIiwiSW1hZ2UiLCJDb25maXJtIiwiTGluayIsIlJvdXRlciIsImlzcGVhayIsIndlYjMiLCJIb21lIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInN0YXRlIiwiaGFzT3duUHJvcGVydHkiLCJzZXRTdGF0ZSIsImhpc3QyIiwiY291bnQiLCJkaXNhYiIsImFjdGl2ZUl0ZW0xIiwiYWN0aXZlSXRlbTIiLCJhY3RpdmVJdGVtMyIsImhhbmRsZUl0ZW1DbGljazEiLCJiaW5kIiwiaGFuZGxlSXRlbUNsaWNrMiIsImhhbmRsZUl0ZW1DbGljazMiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hSb3V0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUNIOzs7O0FBRUYsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQUssQUFDTCxBQUFPLEFBQ1AsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFBUyxBQUFLLEFBQ2Q7O0FBRUYsQUFDRSxBQUNBLEFBQ0s7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFDSTtnQ0FDbkI7O2dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0lBQUEsQUFDWDs7VUFEVyxBQWVuQixlQUFlLFVBQUEsQUFBQyxhQUdWO1VBRkosQUFFSSxZQUZKLEFBRUk7VUFESixBQUNJLGFBREosQUFDSSxBQUNKOztVQUFJLE1BQUEsQUFBSyxNQUFMLEFBQVcsZUFBZixBQUFJLEFBQTBCLE9BQU8sQUFDbkM7Y0FBQSxBQUFLLDJDQUFMLEFBQ0csTUFESCxBQUNVLEFBRVg7QUFDRjtBQXhCa0IsQUFHakI7O1VBQUEsQUFBSzthQUFRLEFBQ04sSUFBRyxPQURHLEFBQ0csS0FBSSxPQURQLEFBQ2EsSUFBRyxhQURoQixBQUM0QixZQUFXLGFBRHZDLEFBQ21ELFFBQU8sYUFEdkUsQUFBYSxBQUNzRSxBQUVuRjtBQUhhLEFBQ1o7VUFFRCxBQUFLLG1CQUFtQixNQUFBLEFBQUssaUJBQUwsQUFBc0IsS0FBOUMsQUFDQTtVQUFBLEFBQUssbUJBQWtCLE1BQUEsQUFBSyxpQkFBTCxBQUFzQixLQUE3QyxBQUNBO1VBQUEsQUFBSyxtQkFBbUIsTUFBQSxBQUFLLGlCQUFMLEFBQXNCLEtBUjdCLEFBUWpCO1dBQ0Q7QUFDRDs7Ozs7O3FDQWdCaUIsQSxPQUFPLEFBQ3BCO1lBQUEsQUFBTSxBQUVOOztxQkFBQSxBQUFPLGdCQUFjLEtBQUEsQUFBSyxNQUExQixBQUFnQyxBQUNqQzs7OztxQ0FDZ0IsQSxPQUFPLEFBQ3RCO1lBQUEsQUFBTSxBQUVOOztxQkFBQSxBQUFPLGdCQUFjLEtBQUEsQUFBSyxNQUExQixBQUFnQyxBQUNqQzs7OztxQyxBQUNnQixPQUFPLEFBQ3RCO1lBQUEsQUFBTSxBQUVOOztxQkFBQSxBQUFPLGdCQUFjLEtBQUEsQUFBSyxNQUExQixBQUFnQyxBQUNqQzs7Ozs2QkFHTSxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsMENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQURBLEFBQ0EsQUFDQTtBQURBO29EQUNRLEtBQVIsQUFBWTtvQkFBWjtzQkFGQSxBQUVBLEFBQ0E7QUFEQTtvREFDUSxLQUFSLEFBQVk7b0JBQVo7c0JBSEEsQUFHQSxBQUNSO0FBRFE7MEJBQ1IsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQywwQ0FBUSxVQUFULE1BQWtCLE9BQWxCLEFBQXdCO29CQUF4QjtzQkFBQSxBQUVFO0FBRkY7eUJBRUUsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQUZGLEFBRUUsQUFFTjtBQUZNO0FBQUEsMEJBRU4sQUFBQywwQ0FBUSxVQUFUO29CQUFBO3NCQUFBLEFBQ1E7QUFEUjt5QkFDUSxBQUFDLHVDQUFLLFVBQU4sTUFBZSxVQUFmLE1BQXdCLFdBQXhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU07Y0FBTixBQUNPLEFBQ0w7Z0JBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFGckIsQUFFcUMsQUFDbkM7aUJBQVMsS0FIWCxBQUdnQjs7b0JBSGhCO3NCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0Usd0NBS0YsQUFBQyxzQkFBRCxBQUFNO2NBQU4sQUFDTyxBQUNMO2dCQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBRnJCLEFBRXFDLEFBQ25DO2lCQUFTLEtBSFgsQUFHZ0I7O29CQUhoQjtzQkFQRixBQU9FLEFBS0E7QUFMQTtBQUNFLHdDQUlGLEFBQUMsc0JBQUQsQUFBTTtjQUFOLEFBQ08sQUFDTDtnQkFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLGdCQUZyQixBQUVxQyxBQUNuQztpQkFBUyxLQUhYLEFBR2dCOztvQkFIaEI7c0JBakJOLEFBSUosQUFDUSxBQVlFLEFBU047QUFUTTtBQUNFLDRCQVFSLEFBQUMsMENBQVEsVUFBVCxNQUFrQixPQUFsQixBQUF3QjtvQkFBeEI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQVE7QUFBUjtBQUFBLHlCQUFRLEFBQUMsd0NBQU0sS0FBUCxBQUFXLHFCQUFvQixPQUEvQixNQUFxQyxNQUFyQyxBQUEwQztvQkFBMUM7c0JBRFIsQUFDQSxBQUFRLEFBQ1I7QUFEUTs7O29CQUNSO3NCQUZBLEFBRUEsQUFBSztBQUFMO0FBQUE7O29CQUFLO3NCQUZMLEFBRUssQUFDTDtBQURLO0FBQUEsMEJBQ0wsY0FBQSxVQUFNLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUFvQjtBQUFwQjt5QkFBb0IsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBckNsQixBQUNFLEFBSVIsQUFDRSxBQUVFLEFBMEJBLEFBR0EsQUFBb0IsQUFVbkI7Ozs7O0FBNUYrQixBOztrQkFBYixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkY6L1Byb2plY3QxMU1hdGljL0lTcGVhayJ9