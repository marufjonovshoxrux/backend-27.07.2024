import { ApiCall } from '../../lib/http.request'
import { reload } from '../../lib/utils'

const form = document.forms.namedItem('transaction')
const apiCall = new ApiCall('http://localhost:8080')
const locale = JSON.parse(localStorage.getItem('wallet'))
const user = JSON.parse(localStorage.getItem('user'))
const res = await apiCall.getData('/wallets?userId=' + user.id)

const price = document.querySelector('.price')
const Summa = document.querySelector('#Summa')
const currencys = document.querySelector('#currency')

const sum = await apiCall.getData('/wallets')

const [data] = sum

function userTranaction(item) {
	const option = document.createElement('option')
	option.innerHTML = item.name
	// option.value = item.id

	currencys.append(option)
}

reload(res, currencys, userTranaction)

price.innerHTML = 'Сумма которая есть у вас: ' + data.balance

form.onsubmit = async (e) => {
	e.preventDefault()

	const transaction = {
		id: crypto.randomUUID(),
		createdAt: new Date(),
		updatedAt: new Date(),
		type: new FormData(form).get('type'),
		total: new FormData(form).get('total'),
		kategoriy: new FormData(form).get('kategoriy'),
		walletID: locale.id,
		userID: user.id,
	}

	const data = await apiCall.getData('/wallets/' + transaction.walletID)

	delete data.id

	transaction.wallets = data

	console.log(transaction.total, +data.balance);
	

	if (transaction.total <= +data.balance) {
		Summa.style.border = '1px solid red'
		form.reset()
		
		location.assign('/')

		Toastify({
			text: 'Транзакция Успешна',
			duration: 3000,
			destination: 'https://github.com/apvarun/toastify-js',
			newWindow: true,
			close: true,
			gravity: 'top',
			position: 'right',
			stopOnFocus: true,
			style: {
				background: 'linear-gradient(to right, red, red)',
			},
			onClick: function () {},
		}).showToast()

		const total = data.balance - transaction.total
		await apiCall.patchData('/wallets/' + transaction.walletID, {
			balance: total,
		})
		await apiCall.postData('/transaction', transaction)

		localStorage.setItem('transaction', JSON.stringify(transaction))

		form.reset()
		location.assign('/')
	}
}


