import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PokemonList from '../views/PokemonList.vue'
import PokemonsDashboard from '../views/PokemonsDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon-list',
    name: 'PokemonList',
    component: PokemonList
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
