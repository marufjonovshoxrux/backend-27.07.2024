

import moment from "moment";
import { ApiCall } from "../../lib/http.request";
import { reload } from "../../lib/utils.js";


const id = location.search.split('=').at(-1)

const h1 = document.querySelector('h1')

const apiCall = new ApiCall('http://localhost:8080')


const res =  await apiCall.getData('/wallets/' + id)

const wallet = await apiCall.getData('/wallets')



h1.innerHTML = 'Dashboard ' + res.name


const payment_cards = document.querySelector('.payment_cards')

function pay_cards(item) {
    const payment_card = document.createElement('div')
    const span_card = document.createElement('span')
    const span_at = document.createElement('span')

    payment_card.classList.add('payment_card')

    span_card.innerHTML = item.name
    span_at.innerHTML = moment(item.createdAt).fromNow()

    payment_card.append(span_card,span_at)

    payment_card.onclick = () => {
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