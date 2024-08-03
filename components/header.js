export function Header(item) {
	const header = document.createElement('header')

	const nav_left = document.createElement('nav')
	const nav_right = document.createElement('nav')

	const a_first = document.createElement('a')
	const a_second = document.createElement('a')
	const a_thread = document.createElement('a')

	const a_email = document.createElement('a')
	const img = document.createElement('img')

	nav_left.classList.add('left')
	nav_right.classList.add('right')

	a_first.innerText = 'Главная'
	a_second.innerText = 'Мои кошельки'
	a_thread.innerText = 'Мои транзакции'
	a_email.innerText = "EXIT"

	a_first.href = '/'
	a_second.href = '/pages/wallets/'
	a_thread.href = '/pages/transaction/'
	a_email.href = '/pages/signin/'

	img.src = './svg/logo.svg' && '../../svg/logo.svg'
	img.alt = 'exit'
	img.onclick = () => {
    location.assign('/pages/signin/')

	}

	header.append(nav_left, nav_right)
	nav_left.append(a_first, a_second, a_thread)
	nav_right.append(a_email, img)

	return header
}
