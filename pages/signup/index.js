const form = document.forms.namedItem('signup')
const btn = document.querySelector('.btn_enter')
const locale = JSON.parse(localStorage.getItem('title'))
const baseUrl = 'http://localhost:8080'
let Bank

form.onsubmit = async e => {
	e.preventDefault()

	Bank = {
		email: new FormData(form).get('email'),
		names: new FormData(form).get('name'),
		surname: new FormData(form).get('surname'),
		password: new FormData(form).get('password'),
	}

	fetch(baseUrl + '/todos', {
		method: 'POST',
		body: JSON.stringify(Bank),
	})
		.then(res => res.json())
		.then(res => console.log(res))

	localStorage.setItem('user', JSON.stringify(Bank))
}
