// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas o componentes
import Home from '../views/Home.vue'
import Clases from '../views/Clases.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/clases', name: 'Clases', component: Clases }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
