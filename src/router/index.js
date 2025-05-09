// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas o componentes
import Home from '../views/Home.vue'
import Clases from '../views/Clases.vue'
import Materias from '../views/Materias.vue'
import Mensajes from '../views/Mensajes.vue'

const routes = [

  { path: '/', name: 'Home', component: Home },
  { path: '/materias/:materiaId/clases', name: 'Clases', component: Clases },
  { path: '/materias', name: 'Materias', component: Materias },
  { path: '/mensajes', name: 'Mensajes', component: Mensajes },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
