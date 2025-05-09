<template>
  <div class="container py-4">
    <h2 class="mb-4">Materias de la Academia</h2>
    <div class="row g-4">
      <div
        class="col-md-4"
        v-for="(materia, index) in materias"
        :key="index"
      >
        <div
          class="card shadow-lg"
          :style="{ background: customColors[index % customColors.length] }"
        >
          <div class="card-body">
            <h5 class="card-title">{{ materia.nombre }}</h5>
            
            <p class="card-text mb-2">{{materia.descripcion}}</p>
            <p class="card-text mb-2">Avance: {{ materia.avance }}%</p>
            <div class="progress bg-white rounded-pill" style="height: 10px">
              <div
                class="progress-bar bg-dark rounded-pill"
                role="progressbar"
                :style="{ width: materia.avance + '%' }"
                :aria-valuenow="materia.avance"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const materias = [
  {
    nombre: "Técnica Vocal",
    avance: 75,
    descripcion: "Aprendé a controlar tu voz, mejorar la respiración y proyectar con claridad."
  },
  {
    nombre: "Interpretación",
    avance: 50,
    descripcion: "Desarrollá la capacidad de transmitir emociones a través del canto."
  },
  {
    nombre: "Repertorio",
    avance: 90,
    descripcion: "Trabajamos canciones adaptadas a tu estilo para preparar presentaciones."
  },
  {
    nombre: "Teoría Musical",
    avance: 30,
    descripcion: "Estudiá los fundamentos de la música: notas, escalas, ritmo y armonía."
  },
  {
    nombre: "Dicción y Fonética",
    avance: 60,
    descripcion: "Mejorá tu pronunciación, articulación y claridad al cantar."
  }
];


const customColors = [
  "linear-gradient(135deg, #74ebd5, #ACB6E5)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #ffecd2, #fcb69f)",
  "linear-gradient(135deg, #c2e9fb, #a1c4fd)",
  "linear-gradient(135deg, #fddb92, #d1fdff)",
];
</script>

<style scoped>
.card {
  border-radius: 1rem;
  min-height: 160px;
  transition: transform 0.2s;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}
.card:hover {
  transform: translateY(-5px);
}
.card-title {
  font-weight: bold;
}
</style>
