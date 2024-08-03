import { Cards } from "../../components/cards.js"
import { Header } from "../../components/header.js"
import { ApiCall } from "../../lib/http.request.js"
import { users } from "../../lib/users.js"
import { reload } from "../../lib/utils.js"


const apiCall = new ApiCall('http://localhost:8080')
const locale = JSON.parse(localStorage.getItem('user'))

const wallet = await apiCall.getData('/wallets?userID=' + locale.id)
const user = await apiCall.getData('/users')

const header = document.querySelector('.header')
const cards = document.querySelector('.cards')
const a_email = document.querySelector('.email')

a_email.innerHTML = locale.email
reload(users, header, Header)
reload(wallet,cards,Cards)

const btn_add = document.querySelector('.btn_add')

btn_add.onclick = () => {
    location.assign('/pages/addwallet/')
}