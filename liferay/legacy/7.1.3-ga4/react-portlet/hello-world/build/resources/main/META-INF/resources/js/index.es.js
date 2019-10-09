Liferay.Loader.define('hello-world@1.0.0/js/index.es', ['exports', 'react', 'react-dom'], function (exports, _react, _reactDom) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	exports.default = function (elementId) {
		_reactDom2.default.render(_react2.default.createElement(HelloWorld, null), document.getElementById(elementId));
	};

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var HelloWorld = function HelloWorld() {
		return _react2.default.createElement(
			'div',
			null,
			'Hello World!'
		);
	};
});
//# sourceMappingURL=index.es.js.map