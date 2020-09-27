import Vue from 'vue' 
import Buefy from 'buefy'

Vue.use(Buefy)

import App from './app.vue' 

import './style.scss'
// import 'buefy/dist/buefy.css'

let vm = new Vue({
	el: '#app',
	render: h => h(App) 
})
