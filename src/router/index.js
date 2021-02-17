import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../components/NotFound.vue'
import PokemonsDashboard from '../views/PokemonsDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/pokemons',
    name: 'PokemonsDashboard',
    component: PokemonsDashboard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
