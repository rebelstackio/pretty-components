const { MetaComponent, Button, Div } = require('@rebelstack-io/metaflux/dist/metaflux.js');
require('../../handlers');
require('./index.css');

const PrettyButton = function (props, content) {
	props = props ? props : {}
	const className = props.type ? 'p-btn ' + props.type : 'p-btn'
	const button = Div({className: className}).Button(props, content)
	const el = button.baseNode();
	if(!props.onclick && props.href) {
		button.onclick = () => { document.location.href = button.href }
	}
	return el;
}

class PButton extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		this.innerHTML = '';
		this.props = this.getProps();
		return PrettyButton(this.props, this.props.value);
	}

	getProps() {
		let _props = {}
		this.getAttributeNames().forEach((attName) => {
			const att = this.getAttribute(attName);
			_props[attName] = attName === 'onclick' ? window[att] : att;
		})
		return _props;
	}
}

window.customElements.define('pretty-button', PButton);

module.exports = { PrettyButton }