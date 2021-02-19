import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game.vue'
import Welcome from '../views/Welcome.vue'
import Gameover from '../views/Gameover.vue'
import store from '../store/index'

Vue.use(VueRouter)

const navigationGuard = (to, from, next) => {
  console.log(store.state.stateTeam.gameState, store.state.team, '<<<<<<')
  console.log(from.name, '<<<<< from')
  if (to.name === 'Game' && (!store.state.stateTeam.gameState || !store.state.team)) {
    next({ name: 'Welcome' })
  } else if (to.name === 'Gameover' && from.name === null) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: navigationGuard
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
    beforeEnter: navigationGuard
  },
  {
    path: '/gameover',
    name: 'Gameover',
    component: Gameover,
    beforeEnter: navigationGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
