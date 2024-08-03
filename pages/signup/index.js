
import { ApiCall} from "../../lib/http.request.js"



const form = document.forms.namedItem('signup')
const btn = document.querySelector('.btn_enter')
const locale = JSON.parse(localStorage.getItem('user'))

const apiCall = new ApiCall('http://localhost:8080')


form.onsubmit = async (e) => {
	e.preventDefault()

	const user = {
		id: crypto.randomUUID(),
		createdAt: new Date(),
		updatedAt: new Date(),
		email: new FormData(form).get('email'),
		names: new FormData(form).get('name'),
		surname: new FormData(form).get('surname'),
		password: new FormData(form).get('password'),
		
	}

	const users = await apiCall.getData('/users?email=' + user.email)
	

	
	if (users.length > 0) {
		alert('На эту почту регистрация есть')
		return
	}
	const res = await apiCall.postData('/users', user)
	
	if (res.status !== 201) {
		form.reset()
		location.assign('/pages/signin/')
	}




	localStorage.setItem('user', JSON.stringify(user))
}
