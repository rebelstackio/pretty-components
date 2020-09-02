import { PrettyButton } from '../src/components/Button';

test('empty pretty button should be a button el',() => {
	const btn = PrettyButton();
	expect(btn.firstChild).toBeInstanceOf(HTMLButtonElement)
});

test('webcompoent pretty-button should be a button', () => {
	const btn = document.createElement('pretty-button');
	document.body.appendChild(btn)
	expect(btn.querySelector('button')).toBeInstanceOf(HTMLButtonElement)
});

test('Pretty button can recive a href and type props', () => {
	const btn = PrettyButton({ href: '#pb', type: 'danger' })
	btn.firstChild.click();
	expect(document.location.hash).toEqual('#pb')
});

test('webcomponent pretty-button should transform attributes into props', () => {
	window['_f'] = function () {}
	document.body.innerHTML = '<pretty-button onclick="_f" value="hello world"></pretty-button>';
	const btn = document.querySelector('button');
	expect(btn.innerHTML).toEqual('hello world');
});

