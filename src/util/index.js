

export function getBody(that, empty) {
	if (empty && that.children.length === 0) {
		return '';
	}
	const b = that.innerHTML;
	that.innerHTML = '';
	return b;
}

export function instanceElement(name, classObj) {
	window.customElements.define(name, classObj);
	return function (name, props) {

	}
}