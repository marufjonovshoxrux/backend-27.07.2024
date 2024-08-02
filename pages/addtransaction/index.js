import { ApiCall } from '../../lib/http.request'

const form = document.forms.namedItem('transaction')
const apiCall = new ApiCall('http://localhost:8080')
const locale = JSON.parse(localStorage.getItem('transaction'))

form.onsubmit = async (e) => {
	e.preventDefault()

	const transaction = {
		id: crypto.randomUUID(),
		createdAt: new Date(),
		updatedAt: new Date(),
		wallet: new FormData(form).get('wallet'),
		Summa: new FormData(form).get('Summa'),
		kategoriy: new FormData(form).get('kategoriy'),
		// wallet: locale.id,
	}

	const res = await apiCall.postData('/transaction', transaction)

	if (res.status === 201) {
		form.reset()
		location.assign('/pages/transaction/')
	}

	localStorage.setItem('transaction', JSON.stringify(transaction))
}
