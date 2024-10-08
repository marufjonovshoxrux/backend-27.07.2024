import moment from "moment"

export function Table(item) {
   
    const tr_body = document.createElement('tr')
    const td_num = document.createElement('td')
    const visa = document.createElement('td')
    const auto = document.createElement('td')
    const price = document.createElement('td')
    const days = document.createElement('td')

    tr_body.classList.add('tbody')

    td_num.innerHTML = item.id
    visa.innerHTML = item.type
    auto.innerHTML = item.kategoriy
    price.innerHTML = Number(item.total).toLocaleString('en') 

    days.innerHTML = moment(item.createdAt).fromNow()

    tr_body.append(td_num,visa,auto,price,days)

    return tr_body
}