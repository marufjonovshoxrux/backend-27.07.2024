import { Cards } from './components/cards.js'
import { Header } from './components/header.js'
import { Table } from './components/table.js'
import { users } from './lib/users.js'
import { reload } from './lib/utils.js'
import { ApiCall } from './lib/http.request.js'

const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL)
const locale = JSON.parse(localStorage.getItem('user'))
const wallet =  apiCall.getData('/wallets?userID=' + locale.id)

const trans_action =  apiCall.getData('/transaction?userID=' + locale.id)



const name_h1 = document.querySelector('.name_h1')
const email_a = document.querySelector('.email')

const cards = document.querySelector('.cards')
const header = document.querySelector('.header')
const tbody = document.querySelector('tbody')

name_h1.innerHTML = locale.names + ' ' + locale.surname

email_a.innerHTML = locale.email

reload(users, header, Header)
reload(wallet, cards, Cards)
reload(trans_action, tbody, Table)
