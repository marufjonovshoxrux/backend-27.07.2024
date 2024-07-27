const form = document.forms.namedItem('signin')
const baseUrl = 'http://localhost:8080'
let Bank;



form.onsubmit = async (e) => {
	e.preventDefault()

	Bank = {
		email: new FormData(form).get('sign'),
		password: new FormData(form).get('password'),
	}

	console.log(Bank);


    fetch(baseUrl + '/todos', {
			method: 'POST',
			body: JSON.stringify(Bank),
		})
			.then(res => res.json())
			.then(res => console.log(res))

}

