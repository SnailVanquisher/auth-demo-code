import Vue from 'vue'
import App from './App.vue'
import router from './router'
const fb = require('./firebaseConfig.js')
import firebase from 'firebase'

Vue.config.productionTip = false
let app;

//Wrap app creation in onAuthStateChanged or page reloads dont work
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
        el: '#app',
        router,
        render: h => h(App)
    })
  }
})
