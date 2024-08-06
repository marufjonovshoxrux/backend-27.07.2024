import { ApiCall } from '../../lib/http.request'

const form = document.forms.namedItem('transaction')
const apiCall = new ApiCall('http://localhost:8080')
const locale = JSON.parse(localStorage.getItem('wallet'))
const Sum = document.querySelector('.sum')
const Summa = document.querySelector('#Summa')

const sum = await apiCall.getData('/wallets')

const [data] = sum

Sum.innerHTML = data.balance

if (data.balance >= Summa.value) {
	Summa.classList.add('show')
}

form.onsubmit = async e => {
	e.preventDefault()

	const transaction = {
		id: crypto.randomUUID(),
		createdAt: new Date(),
		updatedAt: new Date(),
		type: new FormData(form).get('type'),
		Summa: new FormData(form).get('Summa'),
		kategoriy: new FormData(form).get('kategoriy'),
		walletID: locale.id,
	}

	const res = await apiCall.postData('/transaction', transaction)

	if (res.status !== 201) {
		form.reset()
		Toastify({
			text: 'Трансакция Успешна',
			duration: 3000,
			destination: 'https://github.com/apvarun/toastify-js',
			newWindow: true,
			close: true,
			gravity: 'top',
			position: 'right',
			stopOnFocus: true,
			style: {
				background: 'linear-gradient(to right, red, blue)',
			},
			onClick: function () {},
		}).showToast()
		setTimeout(() => {
			location.assign('/pages/transaction/')
		}, 2000)
	} else {
		Toastify({
			text: 'Трансакция Успешна',
			duration: 3000,
			destination: 'https://github.com/apvarun/toastify-js',
			newWindow: true,
			close: true,
			gravity: 'top',
			position: 'right',
			stopOnFocus: true,
			style: {
				background: 'linear-gradient(to right, red, blue)',
			},
			onClick: function () {},
		}).showToast()
		setTimeout(() => {
			location.assign('/pages/transaction/')
		}, 2000)
	}

	localStorage.setItem('transaction', JSON.stringify(transaction))
}
