<template>
  <div class="layout">
    <Sidebar />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
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
