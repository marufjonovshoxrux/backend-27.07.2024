import { ApiCall } from '../../lib/http.request'

const form = document.forms.namedItem('wallet')
const apiCall = new ApiCall('http://localhost:8080')
const locale = JSON.parse(localStorage.getItem('wallet'))

form.onsubmit = async e => {
	e.preventDefault()

	const wallets = {
		id: crypto.randomUUID(),
		createdAt: new Date(),
		updatedAt: new Date(),
		balance: new FormData(form).get('balance'),
		currency: new FormData(form).get('currency'),
		name: new FormData(form).get('name'),
		// userID:
	}

	const res = await apiCall.postData('/wallets', wallets)

	if (res.status === 201) {
		form.reset()
		location.assign('/pages/addtransaction/')
	}

	const wallet = await apiCall.getData('/wallets?name=' + wallets.name)

	if (wallet.data.length > 0) {
		alert('На это имя регистрация есть')
		return
	}

	localStorage.setItem('wallet', JSON.stringify(wallets))
}
