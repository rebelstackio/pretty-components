const { MetaComponent, Div, Span, Img, H3} = require('@rebelstack-io/metaflux');
const { getBody } = require('../../util');
require('./index.css');

const PrettyCard = function(props, content) {
	props = props ? props : {};
	return Div({className: !props.bordered ? 'p-card' : 'p-card bordered'},
	[
		props.avatar ? Span({ className: 'p-avatar' }, Img({src: props.avatar})) : '',
		Div({className: 'head'}, [
			H3(false, props.title),
			Div({className: 'description'}, props.description)
		]),
		!content ? '' : Div({className:'body'}, content)
	]);
}

class Card extends MetaComponent {
	constructor () {
		super ();
		this.body = getBody(this, true);
	}
	// eslint-disable-next-line class-method-use-this
	render() {
		const props = this.getProps();
		return PrettyCard(props, this.body)
	}
	/**
	 * get properties
	 */
	getProps () {
		const title = this.getAttribute('title') !== null
			? this.getAttribute('title')
			: 'Title';
		const description = this.getAttribute('description') !== null
			? this.getAttribute('description')
			: '';
		const avatar = this.getAttribute('avatar') !== null
			? this.getAttribute('avatar')
			: '';
		return {
			title, avatar, description
		}
	}
}

window.customElements.define('pretty-card', Card);

module.exports = { PrettyCard };