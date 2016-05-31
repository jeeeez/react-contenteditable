'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ContentEditable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 可编辑的 DIV
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @authors Picker Lee (https://github.com/li2274221)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @email   450994392@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date    2016-05-30 11:10:24
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ContentEditable = function (_React$Component) {
	_inherits(ContentEditable, _React$Component);

	function ContentEditable() {
		_classCallCheck(this, ContentEditable);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContentEditable).call(this));

		_this.emitChange = _this.emitChange.bind(_this);
		return _this;
	}

	_createClass(ContentEditable, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return !this.htmlEl || nextProps.html !== this.htmlEl.innerHTML || this.props.disabled !== nextProps.disabled;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
				this.htmlEl.innerHTML = this.props.html;
			}
		}
	}, {
		key: 'emitChange',
		value: function emitChange(evt) {
			if (!this.htmlEl) return;
			var html = this.htmlEl.innerHTML;
			if (this.props.onChange && html !== this.lastHtml) {
				evt.target = {
					value: html
				};
				this.props.onChange(evt);
			}
			this.lastHtml = html;
		}
	}, {
		key: 'reset',
		value: function reset() {
			var html = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

			this.lastHtml = html;
		}
	}, {
		key: 'fullSelectionRange',
		value: function fullSelectionRange() {
			if (!this.htmlEl || !this.htmlEl.childNodes || this.htmlEl.childNodes.length === 0) return;

			var range = document.createRange();
			var selection = window.getSelection();
			range.setStart(this.htmlEl.childNodes[0], this.props.html.length);
			range.collapse(true);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.htmlEl.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.htmlEl.blur();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('div', { ...this.props, ...{
					ref: function ref(e) {
						return _this2.htmlEl = e;
					},
					onInput: this.emitChange,
					onBlur: this.emitChange,
					onFocus: this.props.onFocus,
					contentEditable: !this.props.disabled,
					dangerouslySetInnerHTML: {
						__html: this.props.html
					}
				} }, this.props.children);
		}
	}]);

	return ContentEditable;
}(_react2.default.Component);

ContentEditable.propTypes = {
	disabled: _react2.default.PropTypes.bool,
	html: _react2.default.PropTypes.string,
	onChange: _react2.default.PropTypes.func,
	onFocus: _react2.default.PropTypes.onFocus
};
exports.default = ContentEditable;
module.exports = exports['default'];