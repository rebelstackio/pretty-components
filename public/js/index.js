document.addEventListener('DOMContentLoaded', () => {
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

	container.Div({ className: 'demo-box' }, [
		PrettyCard({title: 'Testing', description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}),
		PrettyCard({title: 'with avatar', avatar: '../img/favicon.png'},
			P(false, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
		),
		PrettyCard({title: 'with body', bordered: true},
			Div(false, PrettyButton(false, 'ClickMe'))
		)
	])
})
