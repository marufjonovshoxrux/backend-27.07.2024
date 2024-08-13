import { ApiCall } from '../../lib/http.request'

const form = document.forms.namedItem('wallet')
const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)
const locale = JSON.parse(localStorage.getItem('user'))

const select = document.querySelector('#currency')

const res = await fetch('https://api.apilayer.com/exchangerates_data/symbols', {
	method: 'get',
	headers: {
		// apikey: 'oHOwMCakYel19w2RLASK0GUjtTV8OlfO',
	},
})

const data = await res.json()

for(let key in data.symbols ) {
	select.innerHTML += `
		<option value="${key}">${key}: ${data.symbols[key]}</option>
	`
}

form.onsubmit = async (e) => {
	e.preventDefault()

	const wallets = {
		id: crypto.randomUUID(),
		createdAt: new Date(),
		updatedAt: new Date(),
		balance: new FormData(form).get('balance'),
		currency: new FormData(form).get('currency'),
		name: new FormData(form).get('name'),
		userID: locale.id,
	}

	const res = await apiCall.postData('/wallets', wallets)

	if (res.status !== 201) {
		form.reset()
		location.assign('/pages/wallets/')
	}

	

	localStorage.setItem('wallet', JSON.stringify(wallets))
}
