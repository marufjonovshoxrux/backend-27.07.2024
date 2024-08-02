import { Cards } from "./components/cards.js"
import { Header } from "./components/header.js"
import { Table } from "./components/table.js"
import { users } from "./lib/users.js"
import { reload } from "./lib/utils.js"
import { ApiCall } from "./lib/http.request.js"

const apiCall = new ApiCall('http://localhost:8080')
const wallet = await apiCall.getData('/wallets' )

const name_h1 = document.querySelector('.name_h1')
const cards = document.querySelector('.cards')
const header = document.querySelector('.header')
const tbody = document.querySelector('tbody')



reload(users, header, Header)
reload(wallet, cards, Cards)
reload(users, tbody, Table)


