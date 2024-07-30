import { ApiCall } from "../../lib/http.request"



const form = document.forms.namedItem('signin')
const locale = JSON.parse(localStorage.getItem('user'))
const apiCall = new ApiCall('http://localhost:8080')

form.onsubmit = async e => {
	e.preventDefault()

	const user = {
		email: new FormData(form).get('sign'),
		password: new FormData(form).get('password'),
	}

	const users = await apiCall.getData('/users?email=' + user.email)
	const password = await apiCall.getData('/users?password=' + user.password)

	if (users.data.length > 0 ) {
		alert('Почта правильно')
		// return
	} else {
		alert('Почта неправильно')
	}

	if (password.data.length) {
		alert('Пароль правильно')
	} else {
		alert('Пароль неправильно')
	}

	if (users.data.length > 0 && password.data.length) {
		alert("всё правильно")
		location.assign('/')
	} 

	localStorage.setItem('user', JSON.stringify(user))
}
