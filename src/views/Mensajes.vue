<template>
  <div class="mensajeria-container">
    <!-- Sidebar de conversaciones -->
    <aside class="conversaciones">
      <h3>Conversaciones</h3>
      <ul>
        <li
          v-for="conversacion in conversaciones"
          :key="conversacion.id"
          :class="{ activa: conversacion.id === seleccionada?.id }"
          @click="seleccionarConversacion(conversacion)"
        >
          {{ conversacion.nombre }}
        </li>
      </ul>
    </aside>

    <!-- Panel de mensajes -->
    <main class="chat-panel" v-if="seleccionada">
      <header class="chat-header">
        <h4>{{ seleccionada.nombre }}</h4>
      </header>

      <section class="mensajes">
        <div
          v-for="mensaje in mensajes"
          :key="mensaje.id"
          :class="['mensaje', mensaje.propietario === 'yo' ? 'enviado' : 'recibido']"
        >
          <p>{{ mensaje.texto }}</p>
        </div>
      </section>

      <footer class="escribir">
        <input
          type="text"
          v-model="nuevoMensaje"
          @keyup.enter="enviarMensaje"
          placeholder="Escribí tu mensaje..."
        />
        <button @click="enviarMensaje">Enviar</button>
      </footer>
    </main>

    <main class="chat-panel" v-else>
      <div class="empty">Seleccioná una conversación</div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const conversaciones = ref([
  { id: 1, nombre: 'Profesor Juan' },
  { id: 2, nombre: 'Academia Central' },
])

const seleccionada = ref(null)

const mensajes = ref([])

const nuevoMensaje = ref('')

function seleccionarConversacion(conv) {
  seleccionada.value = conv
  // Acá deberías cargar los mensajes reales desde el backend
  mensajes.value = [
    { id: 1, texto: 'Hola, ¿cómo estás?', propietario: 'otro' },
    { id: 2, texto: 'Bien, ¿y usted?', propietario: 'yo' },
  ]
}

function enviarMensaje() {
  if (nuevoMensaje.value.trim() === '') return
  mensajes.value.push({
    id: Date.now(),
    texto: nuevoMensaje.value,
    propietario: 'yo',
  })
  nuevoMensaje.value = ''
}
</script>

<style scoped>
.mensajeria-container {
  display: flex;
  height: 100vh;
  background-color: #f2f5f5;
  font-family: sans-serif;
}

.conversaciones {
  width: 250px;
  border-right: 1px solid #ccc;
  background-color: #ffffff;
  padding: 1rem;
  overflow-y: auto;
}

.conversaciones h3 {
  margin-bottom: 1rem;
}

.conversaciones ul {
  list-style: none;
  padding: 0;
}

.conversaciones li {
  padding: 0.6rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
}

.conversaciones li:hover,
.conversaciones li.activa {
  background-color: #f0b12b;
  color: white;
}

.chat-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  background-color: #b2e7f7;
}

.mensajes {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mensaje {
  max-width: 60%;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  word-wrap: break-word;
}

.enviado {
  align-self: flex-end;
  background-color: #f0b12b;
  color: white;
}

.recibido {
  align-self: flex-start;
  background-color: #f7e49d;
  color: #333;
}

.escribir {
  display: flex;
  border-top: 1px solid #ccc;
  padding: 0.8rem;
  background-color: #ffffff;
}

.escribir input {
  flex: 1;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-right: 0.5rem;
}

.escribir button {
  background-color: #f0b12b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

.empty {
  margin: auto;
  color: #777;
  font-size: 1.2rem;
}
</style>
