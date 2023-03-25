const loginForm = document.querySelector('#login-form');
const message = document.querySelector('#message');
const logoutButton = document.createElement('button');
logoutButton.innerHTML = 'Logout';
logoutButton.classList.add('hidden');
document.body.appendChild(logoutButton);

loginForm.addEventListener('submit', function(e) {
	e.preventDefault();
	
	const username = loginForm.username.value;
	const password = loginForm.password.value;

	if (username === 'pucpr' && password === 'pucpr') {
		message.innerHTML = 'Atividade Somativa de DevOps - Alunos Ronaldo Santana Junior e Jean Gustavo Marcondes Rodrigues, do curso de Análise e Desenvolvimento de Sistemas da PUCPR.';
		message.classList.remove('hidden');
		loginForm.classList.add('hidden');
		logoutButton.classList.remove('hidden');
	} else {
		alert('Usuário ou senha inválidos!');
	}
});

logoutButton.addEventListener('click', function() {
	message.classList.add('hidden');
	loginForm.classList.remove('hidden');
	logoutButton.classList.add('hidden');
	loginForm.reset();
});
