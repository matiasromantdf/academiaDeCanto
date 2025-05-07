<!-- views/Home.vue -->
<template>
  <div class="container py-5">
    <div class="row justify-content-center text-center mb-4">
      <div class="col-lg-8">
        <h1 class="display-4 fw-bold">Bienvenido al Curso de Canto</h1>
        <p class="lead text-muted">
          Aprende a cantar desde cero con clases estructuradas, material exclusivo y seguimiento personalizado.
        </p>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <FileText class="mb-3" style="width: 40px; height: 40px;" />
            <h5 class="card-title">Material PDF</h5>
            <p class="card-text text-muted">
              Cada clase incluye un documento en PDF con teoría, ejercicios y recomendaciones vocales.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <Video class="mb-3" style="width: 40px; height: 40px;" />
            <h5 class="card-title">Clases en Video</h5>
            <p class="card-text text-muted">
              Accedé a videos explicativos con ejemplos prácticos y técnicas vocales guiadas.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <ClipboardCheck class="mb-3" style="width: 40px; height: 40px;" />
            <h5 class="card-title">Evaluación</h5>
            <p class="card-text text-muted">
              Luego de cada clase, completá un formulario interactivo para medir tu progreso.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FileText, Video, ClipboardCheck } from 'lucide-vue-next'
</script>
