import { Header } from "../../components/header.js"
import { Table } from "../../components/table.js"
import { ApiCall } from "../../lib/http.request.js"
import { users } from "../../lib/users.js"
import { reload } from "../../lib/utils.js"


const apiCall = new ApiCall('http://localhost:8080')
const locale = JSON.parse(localStorage.getItem('user'))

const trans_action = await apiCall.getData('/transaction')
const user = await apiCall.getData('/users')


const header = document.querySelector('.header')
const tbody = document.querySelector('tbody')

const email = document.querySelector('.email')
email.innerHTML = locale.email

reload(users, header, Header)
reload(trans_action, tbody, Table)

const trans_action_add = document.querySelector('.trans_action_add')

trans_action_add.onclick = () => {
    location.assign('/pages/addtransaction/')

}