import Vue from 'vue'
import app from './app.vue'
import router from './router/routes.js'
import store from './store/store'
import './assets/style/main.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCQFa_vY1zPZ2rm7lk95uqQ_m90I6aMnyA',
        libraries: 'places',
    },
})



new Vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app')