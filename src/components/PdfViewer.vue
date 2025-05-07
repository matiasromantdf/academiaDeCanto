<template>
  <div class="pdf-container" ref="pdfContainer">
    <canvas ref="canvasRef" class="w-100" />
    <div class="navigation">
      <button @click="prevPage" :disabled="pageNum <= 1">Anterior</button>
      <span>Página {{ pageNum }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="pageNum >= totalPages">Siguiente</button>
    </div>
  </div>
</template>

<script setup>
import * as pdfjsLib from 'pdfjs-dist'
import { ref, onMounted } from 'vue'

// Configuración global de PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js'

const props = defineProps({
  url: {
    type: String,
    required: true,
  }
})

const canvasRef = ref(null)
const pdfContainer = ref(null)  // Agregamos la referencia aquí
const pageNum = ref(1)
const totalPages = ref(0)
let pdfDoc = null

const renderPage = async (num) => {
  const page = await pdfDoc.getPage(num)
  const viewport = page.getViewport({ scale: 1.5 })

  const canvas = canvasRef.value
  const context = canvas.getContext('2d')

  canvas.height = viewport.height
  canvas.width = viewport.width

  const renderContext = {
    canvasContext: context,
    viewport
  }

  await page.render(renderContext).promise
}

const loadPdf = async () => {
  const loadingTask = pdfjsLib.getDocument(props.url)
  pdfDoc = await loadingTask.promise
  totalPages.value = pdfDoc.numPages
  await renderPage(pageNum.value)
}

const nextPage = () => {
  if (pageNum.value < totalPages.value) {
    pageNum.value++
    renderPage(pageNum.value)
    scrollToTop()
  }
}

const prevPage = () => {
  if (pageNum.value > 1) {
    pageNum.value--
    renderPage(pageNum.value)
  }
}

const scrollToTop = () => {
  if (pdfContainer.value) {
    // Forzar un pequeño retraso antes de hacer scroll
    setTimeout(() => {
      pdfContainer.value.scrollTop = 0; // Mueve el scroll al inicio
    }, 100);  // 100ms de retraso
  }
}

onMounted(loadPdf)
</script>

<style scoped>
.pdf-container {
  max-width: 100%;
  max-height: 500px;  /* Altura fija para permitir el scroll */
  overflow-x: auto;
  overflow-y: auto; /* Asegura que el scroll vertical sea posible */
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background: #f9f9f9;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
</style>
