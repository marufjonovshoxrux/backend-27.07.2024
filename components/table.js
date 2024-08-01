export function Table(item) {
   
    const tr_body = document.createElement('tr')
    const td_num = document.createElement('td')
    const visa = document.createElement('td')
    const auto = document.createElement('td')
    const price = document.createElement('td')
    const days = document.createElement('td')

    tr_body.classList.add('tbody')

    td_num.innerHTML = '1'
    visa.innerHTML = 'VISA'
    auto.innerHTML = 'Автомобиль'
    price.innerHTML = '414,000,000'
    days.innerHTML = '4 дня назад'

    tr_body.append(td_num,visa,auto,price,days)

    return tr_body
}