import { Cards } from "../../components/cards.js"
import { Header } from "../../components/header.js"
import { users } from "../../lib/users.js"
import { reload } from "../../lib/utils.js"

const header = document.querySelector('.header')
const cards = document.querySelector('.cards')


reload(users,header,Header)
reload(users,cards,Cards)