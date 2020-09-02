document.addEventListener('DOMContentLoaded', () => {
	console.log(Div);
	const container = document.querySelector('#main-container');
	container.Div({
		className: 'demo-box'
	},[
		PrettyButton(false, 'default'),
		PrettyButton({ type: 'primary', href: '#here' }, 'primary'),
		PrettyButton({ type: 'danger' }, 'danger'),
		PrettyButton({ type: 'dashed' }, 'dashed'),
		PrettyButton({ type: 'link' }, 'link')
	]);
})
