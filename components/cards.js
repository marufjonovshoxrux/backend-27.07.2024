export function Cards(item) {
	// const cards = document.querySelector('.cards')

	const card = document.createElement('div')
	const span_visa = document.createElement('span')
	const balance = document.createElement('span')
	const span_rub = document.createElement('span')

	card.classList.add('card')
	span_visa.classList.add('Visa')
	span_rub.classList.add('span_rub')
	balance.classList.add('balance')

	span_visa.innerText = item.name
	span_rub.innerHTML = item.currency
	balance.innerHTML = item.balance

	card.onclick = () => {
		location.assign('/pages/walletpages/?id=' + item.id)
	}

	card.style.background = `linear-gradient(84.37deg, ${getRGB()} 2.27%, ${getRGB()} 92.26%)`

	// cards.append(card)
	card.append(span_visa, balance, span_rub)

	return card
}

function getRGB() {
	function randomize() {
		return Math.floor(Math.random() * 255)
	}

	let r = randomize(),
		g = randomize(),
		b = randomize()

	return `rgb(${r},${g},${b})`
}

