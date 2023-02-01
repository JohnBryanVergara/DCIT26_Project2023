(() => {
	const loginForm = document.forms.login;

	loginForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const { email, password } = loginForm.elements;
		if (email.value != 'admin@gmail.com' || password.value != 'admin123') {
			alert('Email or password is incorrect!');
			email.value = '';
			password.value = '';
		} else {
			window.location.replace('../menu/index.html');
		}
	});
})();
