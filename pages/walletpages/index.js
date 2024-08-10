import moment from 'moment'
import { ApiCall } from '../../lib/http.request'
import { reload } from '../../lib/utils.js'

const id = location.search.split('=').at(-1)

const h1 = document.querySelector('h1')

const apiCall = new ApiCall('http://localhost:8080')
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

	return payment_card
}

reload(wallet, payment_cards, pay_cards)

var ctx = document.getElementById('myChart').getContext('2d')
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Dataset 1',
				data: [12, 19, 3, 5, 2, 3, 7],
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
})

const currency_two = document.querySelector('#currency_two')
const currency_three = document.querySelector('#currency_three')
const summa = document.querySelector('#Summa')
const convertBtn = document.querySelector('.btn_convert')
const result = document.querySelector('#result')

const res_one = await fetch('https://api.apilayer.com/fixer/symbols', {
	method: 'get',
	headers: {
		apikey: 'j2pLT7yrORYlBVoSvkYpj4dXnY4GaQJj',
	},
})

const data = await res_one.json()

for (let key in data.symbols) {
	currency_two.innerHTML += `
		<option value="${key}">${key}: ${data.symbols[key]}</option>
	`
	currency_three.innerHTML += `
		<option value="${key}">${key}: ${data.symbols[key]}</option>
	`
}

convertBtn.onclick = () => {
	var myHeaders = new Headers()
	myHeaders.append('apikey', 'j2pLT7yrORYlBVoSvkYpj4dXnY4GaQJj')

	var requestOptions = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders,
	}

	fetch(
		'https://api.apilayer.com/exchangerates_data/latest?symbols=symbols&base=base',
		requestOptions
	)
		.then(response => response.json())
		.then(result => {
			let rate = result.rates[currency_three]
			let convertedAmount = amount * rate
			document.querySelector(
				'#result'
			).innerText = `Total: ${convertedAmount} ${currency_three}`
		})
		.catch(error => console.log('error', error))
}
