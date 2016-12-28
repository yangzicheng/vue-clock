import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Clocklist from './components/Clocklist'
import './static/css/reset.css'

Vue.use(VueRouter)

const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/home',
        component : Home
    },
    {
        path : '/clocklist',
        component : Clocklist
    },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  ...App
})


