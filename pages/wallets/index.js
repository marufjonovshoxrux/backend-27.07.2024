import { Cards } from "../../components/cards.js"
import { Header } from "../../components/header.js"
import { ApiCall } from "../../lib/http.request.js"
import { users } from "../../lib/users.js"
import { reload } from "../../lib/utils.js"


const apiCall = new ApiCall('http://localhost:8080')
const wallet = await apiCall.getData('/wallets' )


const header = document.querySelector('.header')
const cards = document.querySelector('.cards')


reload(users,header,Header)
reload(wallet,cards,Cards)

const btn_add = document.querySelector('.btn_add')

btn_add.onclick = () => {
    location.assign('/pages/addwallet/')
}