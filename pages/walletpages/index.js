import moment from 'moment'
import { ApiCall } from '../../lib/http.request'
import { reload } from '../../lib/utils.js'
import Chart from 'chart.js/auto'

const id = location.search.split('=').at(-1)

const h1 = document.querySelector('h1')

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)
const bank_apiCall = new ApiCall(
	`https://api.apilayer.com/exchangerates_data
`
)
const locale = JSON.parse(localStorage.getItem('user'))

const res = await apiCall.getData('/wallets/' + id)

const wallet = await apiCall.getData('/wallets?userID=' + locale.id)





h1.innerHTML = 'Dashboard ' + res.name

const payment_cards = document.querySelector('.payment_cards')

function pay_cards(item) {
	const payment_card = document.createElement('div')
	const span_card = document.createElement('span')
	const span_at = document.createElement('span')

	payment_card.classList.add('payment_card')

	span_card.innerHTML = item.name
	span_at.innerHTML = moment(item.createdAt).fromNow()

	payment_card.append(span_card, span_at)

	payment_card.onclick = () => {
		payment_card.classList.toggle('show')
		h1.innerHTML = 'Dashboard ' + item.name
	}

	if (item.name === res.name) {
		payment_card.classList.toggle('show')
	}

	payment_card.onclick = () => {
		location.assign('/pages/walletpages/?id=' + item.id)
	}
	return payment_card
}

reload(wallet, payment_cards, pay_cards)

const ctx = document.querySelector('#myChart')

new Chart(ctx, {
	type: 'line',
	data: {
		labels: wallet.map(item => item.createdAt),
		datasets: [
			{
				label: '',
				data: wallet.map(item => item.balance),
				fill: false,
				borderColor: 'rgb(75, 192, 192)',
				tension: 0.1,
			},
		],
	},
})

const currency_two = document.querySelector('#currency_two')
const currency_three = document.querySelector('#currency_three')
const summa = document.querySelector('#Summa')
const convertBtn = document.querySelector('.btn_convert')
const result = document.querySelector('#result')

const res_one = await fetch(
	'https://api.apilayer.com/exchangerates_data/symbols',
	{
		method: 'get',
		headers: {
			// apikey: 'j2pLT7yrORYlBVoSvkYpj4dXnY4GaQJj',
		},
	}
)

const data = await res_one.json()

for (let key in data.symbols) {
	currency_two.innerHTML += `
		<option value="${key}">${key}: ${data.symbols[key]}</option>
	`
	currency_three.innerHTML += `
		<option value="${key}">${key}: ${data.symbols[key]}</option>
	`
}

convertBtn.onclick = async () => {
	const params = {
		from: currency_two.value,
		to: currency_three.value,
		amount: summa.value,
	}
	const convertation = await bank_apiCall.getData('/convert', params)
	result.innerHTML = `TOTAL: ${convertation.result} ${currency_three.value}`
}

const Visa = document.querySelector('.Visa')
const balance = document.querySelector('.balance')

balance.innerHTML = res.balance
Visa.innerHTML = res.name
