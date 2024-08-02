export function Cards(item) {
    // const cards = document.querySelector('.cards')

    const card = document.createElement('div')
    const span_visa = document.createElement('span')
    const span_rub = document.createElement('span')

    card.classList.add('card')
    span_visa.classList.add('Visa')
    span_rub.classList.add('span_rub')

    span_visa.innerText = item.name
    span_rub.innerHTML = item.currency

    // cards.append(card)
    card.append(span_visa, span_rub)

    return card
}