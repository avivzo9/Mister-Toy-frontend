import Vue from 'vue'
import app from './app.vue'
import router from './router/routes.js'
import store from './store/store'
import './assets/style/main.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app')