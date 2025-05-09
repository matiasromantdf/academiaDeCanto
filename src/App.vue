<template>
  <div class="layout">
    <Sidebar :cerrar = "modalCerrado"/>
    <main class="container mt-5">
      <router-view @click="cerrarModal"/>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import {ref} from 'vue'

const modalCerrado = ref(false)

const cerrarModal=()=>{
  modalCerrado.value = !modalCerrado.value
}
</script>

<style>
.layout {
  display: flex;
}

.content {
  background-color: rgb(248, 248, 248);
  margin-left: 220px;
  padding: 2rem;
  width: 100%;
  height: 100vh;
  transition: margin-left 0.3s ease;
}

@media (max-width: 767px) {
  .content {
    margin-left: 10px;
  }
}
</style>
