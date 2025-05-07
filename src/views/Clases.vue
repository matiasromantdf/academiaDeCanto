<template>
  <div class="container py-5">
    <div class="text-center mb-4">
      <h2 class="fw-bold">Tus Clases de Canto</h2>
      <p class="text-muted">Solo se muestran las clases completadas y la clase actual.</p>
    </div>

    <div class="accordion" id="accordionClases">
      <div
        v-for="(clase, index) in clasesFiltradas"
        :key="clase.id"
        class="accordion-item"
      >
        <h2 class="accordion-header" :id="'heading' + clase.id">
          <button
            class="accordion-button"
            :class="{ collapsed: index !== 0 }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + clase.id"
            :aria-expanded="index === 0 ? 'true' : 'false'"
            :aria-controls="'collapse' + clase.id"
          >
            {{ clase.titulo }}
            <Check class="ms-auto text-success" v-if="clase.completada" />
            <PlayCircle class="ms-auto text-primary" v-else />
          </button>
        </h2>
        <div
          :id="'collapse' + clase.id"
          class="accordion-collapse collapse"
          :class="{ show: index === 0 }"
          :aria-labelledby="'heading' + clase.id"
          data-bs-parent="#accordionClases"
        >
          <div class="accordion-body">
            <p>{{ clase.descripcion }}</p>
            <ul>
              <li>
                <FileText class="me-2" /> <a :href="clase.pdf" target="_blank">Ver PDF</a>
              </li>
              <li>
                <Video class="me-2" /> <a :href="clase.video" target="_blank">Ver Video</a>
              </li>
              <li>
                <ClipboardCheck class="me-2" />
                <a :href="clase.cuestionario" target="_blank">Realizar Cuestionario</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileText, Video, ClipboardCheck, Check, PlayCircle } from 'lucide-vue-next'

// Simulación de clases
const clases = [
  {
    id: 1,
    titulo: 'Clase 1 - Respiración y Postura',
    descripcion: 'Aprendé las bases fundamentales del canto.',
    pdf: '/pdfs/clase1.pdf',
    video: '/videos/clase1.mp4',
    cuestionario: '/cuestionarios/clase1',
    completada: true
  },
  {
    id: 2,
    titulo: 'Clase 2 - Calentamiento Vocal',
    descripcion: 'Ejercicios prácticos para preparar tu voz.',
    pdf: '/pdfs/clase2.pdf',
    video: '/videos/clase2.mp4',
    cuestionario: '/cuestionarios/clase2',
    completada: true
  },
  {
    id: 3,
    titulo: 'Clase 3 - Afinación y Registro',
    descripcion: 'Ejercicios de afinación y reconocimiento vocal.',
    pdf: '/pdfs/clase3.pdf',
    video: '/videos/clase3.mp4',
    cuestionario: '/cuestionarios/clase3',
    completada: false // Esta es la clase actual
  },
  {
    id: 4,
    titulo: 'Clase 4 - Interpretación',
    descripcion: 'Interpretar canciones con emoción y técnica.',
    pdf: '/pdfs/clase4.pdf',
    video: '/videos/clase4.mp4',
    cuestionario: '/cuestionarios/clase4',
    completada: false // No debe mostrarse
  }
]

// Mostrar sólo clases completadas + la primera incompleta (actual)
const clasesFiltradas = clases.filter((clase, index) => {
  const completadas = clases.filter(c => c.completada)
  const siguiente = clases.find(c => !c.completada)
  return clase.completada || clase.id === siguiente?.id
})
</script>
