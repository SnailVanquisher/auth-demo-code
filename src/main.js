import Vue from 'vue'
import App from './App.vue'
import router from './router'
const fb = require('./firebaseConfig.js')

Vue.config.productionTip = false

let app

app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
