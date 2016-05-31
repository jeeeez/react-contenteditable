/**
 * ContentEditable
 * 可编辑的 DIV
 * @authors Picker Lee (https://github.com/li2274221)
 * @email   450994392@qq.com
 * @date    2016-05-30 11:10:24
 */

import React from 'react';

export default class ContentEditable extends React.Component {
	static propTypes = {
		disabled: React.PropTypes.bool,
		html: React.PropTypes.string,
		onChange: React.PropTypes.func,
		onFocus: React.PropTypes.onFocus
	};

	constructor() {
		super();
		this.emitChange = this.emitChange.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		return !this.htmlEl || nextProps.html !== this.htmlEl.innerHTML ||
			this.props.disabled !== nextProps.disabled;
	}

	componentDidUpdate() {
		if (this.htmlEl && this.props.html !== this.htmlEl.innerHTML) {
			this.htmlEl.innerHTML = this.props.html;
		}
	}

	emitChange(evt) {
		if (!this.htmlEl) return;
		let html = this.htmlEl.innerHTML;
		if (this.props.onChange && html !== this.lastHtml) {
			evt.target = {
				value: html
			};
			this.props.onChange(evt);
		}
		this.lastHtml = html;
	}

	reset(html = '') {
		this.lastHtml = html;
	}

	fullSelectionRange() {
		if (!this.htmlEl || !this.htmlEl.childNodes || this.htmlEl.childNodes.length === 0) return;

		let range = document.createRange();
		let selection = window.getSelection();
		range.setStart(this.htmlEl.childNodes[0], this.props.html.length);
		range.collapse(true);
		selection.removeAllRanges();
		selection.addRange(range);
	}

	focus() {
		this.htmlEl.focus();
	}

	blur() {
		this.htmlEl.blur();
	}

	render() {
		return React.createElement('div', {
				...this.props,
				... {
					ref: e => this.htmlEl = e,
					onInput: this.emitChange,
					onBlur: this.emitChange,
					onFocus: this.props.onFocus,
					contentEditable: !this.props.disabled,
					dangerouslySetInnerHTML: {
						__html: this.props.html
					}
				}
			},
			this.props.children);
	}
}
