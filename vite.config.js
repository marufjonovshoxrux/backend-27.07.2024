// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				addtransaction: resolve(__dirname, 'pages/addtransaction/index.html'),
				addwallet: resolve(__dirname, 'pages/addwallet/index.html'),
				signin: resolve(__dirname, 'pages/signin/index.html'),
				signup: resolve(__dirname, 'pages/signup/index.html'),
				transaction: resolve(__dirname, 'pages/transaction/index.html'),
				walletpages: resolve(__dirname, 'pages/walletpages/index.html'),
				wallets: resolve(__dirname, 'pages/wallets/index.html'),
			},
		},
	},
})
