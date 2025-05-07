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
            <Check class="ms-2 text-success" v-if="clase.completada" />
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

            <!-- Tabs -->
            <ul class="nav nav-tabs mb-3" :id="'tabs-' + clase.id" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" :id="'pdf-tab-' + clase.id" data-bs-toggle="tab" :data-bs-target="'#pdf-' + clase.id" type="button" role="tab">PDF</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" :id="'video-tab-' + clase.id" data-bs-toggle="tab" :data-bs-target="'#video-' + clase.id" type="button" role="tab">Video</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" :id="'quiz-tab-' + clase.id" data-bs-toggle="tab" :data-bs-target="'#quiz-' + clase.id" type="button" role="tab">Cuestionario</button>
              </li>
            </ul>

            <div class="tab-content" :id="'tab-content-' + clase.id">
              <div class="tab-pane fade show active" :id="'pdf-' + clase.id" role="tabpanel">
               <PdfViewer :url="clase.pdf"/>
              </div>
              <div class="tab-pane fade" :id="'video-' + clase.id" role="tabpanel">
                <video controls class="w-100" style="max-height: 400px;">
                  <source :src="clase.video" type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
              </div>
              <div class="tab-pane fade" :id="'quiz-' + clase.id" role="tabpanel">
                <a :href="clase.cuestionario" target="_blank" class="btn btn-outline-primary">
                  Abrir cuestionario
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileText, Video, ClipboardCheck, Check, PlayCircle } from 'lucide-vue-next'
import PdfViewer from '../components/PdfViewer.vue'
const clases = [
  {
    id: 1,
    titulo: 'Clase 1 - Respiración y Postura',
    descripcion: 'Aprendé las bases fundamentales del canto.',
    pdf: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    video: '/videos/clase1.mp4',
    cuestionario: '/cuestionarios/clase1',
    completada: true
  },
  {
    id: 2,
    titulo: 'Clase 2 - Calentamiento Vocal',
    descripcion: 'Ejercicios prácticos para preparar tu voz.',
    pdf: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    video: '/videos/clase2.mp4',
    cuestionario: '/cuestionarios/clase2',
    completada: true
  },
  {
    id: 3,
    titulo: 'Clase 3 - Afinación y Registro',
    pdf: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    video: '/videos/clase3.mp4',
    cuestionario: '/cuestionarios/clase3',
    completada: false
  },
  {
    id: 4,
    titulo: 'Clase 4 - Interpretación',
    pdf: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    video: '/videos/clase4.mp4',
    cuestionario: '/cuestionarios/clase4',
    completada: false
  }
]

// Solo mostrar clases completadas + la clase actual (primera no completada)
const clasesFiltradas = clases.filter((clase, index) => {
  const completadas = clases.filter(c => c.completada)
  const siguiente = clases.find(c => !c.completada)
  return clase.completada || clase.id === siguiente?.id
})
</script>
