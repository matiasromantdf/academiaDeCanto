// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas o componentes
import Home from '../views/Home.vue'
import Clases from '../views/Clases.vue'
import Materias from '../views/Materias.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/clases', name: 'Clases', component: Clases },
  { path: '/materias', name: 'Materias', component: Materias }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
