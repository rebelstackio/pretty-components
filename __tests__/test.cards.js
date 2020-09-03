import {PrettyCard} from '../src/components/Card';

test('pretty card spawn title and description if provided', () => {
	const card = PrettyCard({ title: 'Title', description: 'Desc', bordered: true });
	expect(card.querySelector('.head > h3').innerHTML).toEqual('Title');
	expect(card.querySelector('.description').innerHTML).toEqual('Desc');
});

test('PrettyCard props can be empty', () => {
	const el = PrettyCard(false, 'Test');
	expect(el).toBeTruthy();
})

test('Webcomponent pretty-card should spawn a PrettyCard', () => {
	const el = document.createElement('pretty-card');
	el.setAttributes({ title: 'title', description: 'desc',avatar: './avatar.pg'});
	document.body.appendChild(el);
	expect(el.querySelector('.head > h3').innerHTML).toEqual('title');
	expect(el.querySelector('.description').innerHTML).toEqual('desc');
});

test('webcompoent pretty-card props can be empty', () => {
	const el = document.createElement('pretty-card');
	document.body.appendChild(el);
	expect(el).toBeTruthy();
})