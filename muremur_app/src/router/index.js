import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fruits from '../views/Fruits.vue'
import Legumes from '../views/Legumes.vue'
import A_propos from '../views/A_Propos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Fruits',
    name: 'Fruits',
    component: Fruits
  },
{
  path: '/Legumes',
  name: 'Legumes',
  component: Legumes
},
{
  path: '/A_propos',
  name: 'A_propos',
  component: A_propos
},

]

const router = new VueRouter({
  routes
})

export default router
