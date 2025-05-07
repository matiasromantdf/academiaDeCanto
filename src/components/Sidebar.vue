<template>
<button v-if="isMobile && !open" class="floating-toggle" @click="toggleSidebar">
  ☰
</button>
  <aside :class="['sidebar', { retraido: !open, mobile: isMobile && !open }]">
    <div class="header">
      <h2 v-if="open || isMobile">Mi App</h2>
      <button class="toggle" @click="toggleSidebar">
        <span class="icon">&#9776;</span>
      </button>
    </div>

    <nav class="nav">
      <router-link to="/" class="link" active-class="active">
        <Home />
        <span class="ms-2" v-if="open || isMobile">home</span>
      </router-link>
       <router-link to="/clases" class="link" active-class="active">
        <LibraryBig />
        <span class="ms-2" v-if="open || isMobile">Clases</span>
      </router-link>
     
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Home, LibraryBig} from 'lucide-vue-next'

const open = ref(true)
const isMobile = ref(false)

function toggleSidebar() {
  // En móviles, mostrar/ocultar completamente
  if (isMobile.value) {
    open.value = !open.value
  } else {
    // En escritorio, solo colapsar el contenido
    open.value = !open.value
  }
}

function handleResize() {
  isMobile.value = window.innerWidth < 768
  // Si es móvil, iniciar cerrado
  open.value = !isMobile.value
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.sidebar {
  background-color: #2c3e50;
  color: white;
  height: 100vh;
  padding: 1rem;
  width: 220px;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.sidebar.retraido {
  width: 80px;
}

.sidebar.mobile {
  transform: translateX(-100%);
}

.sidebar.mobile.open {
  transform: translateX(0);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
}

.nav {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}

.link {
  color: #bdc3c7;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
}

.link:hover {
  background-color: #34495e;
}

.active {
  background-color: #1abc9c;
  color: white;
}
.sidebar.mobile {
  transform: translateX(-100%);
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease;
}

.sidebar.mobile.open {
  transform: translateX(0);
}
.floating-toggle {
  position: fixed;
  top: 0rem;
  left: 0rem;
  z-index: 1100;
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.6rem 0.8rem;
  font-size: 1.2rem;
  border-radius:0px 5px 5px 0px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
</style>
