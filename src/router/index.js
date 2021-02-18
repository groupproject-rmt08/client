import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game.vue'
import Welcome from '../views/Welcome.vue'
import Gameover from '../views/Gameover.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/gameover',
    name: 'Gameover',
    component: Gameover
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
