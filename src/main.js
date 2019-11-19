import Vue from 'vue'
import './assets/styles/main.scss'

import App from './app.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
