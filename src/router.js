import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Hello from './views/Hello.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})

export default router
