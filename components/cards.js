export function cards(item) {
    const cards = document.createElement('.cards')

    const card = document.createElement('div')
    const span_visa = document.createElement('span')
    const span_rub = document.createElement('span')

    card.classList.add('card')
    span_visa.classList.add('Visa')
    span_rub.classList.add('span_rub')

    span_visa.innerText = 'Visa'
    span_rub.innerHTML = 'RUB'

    cards.append(card)
    card.append(span_visa, span_rub)

    return cards
}