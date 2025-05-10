<template>
    <div class="row">
        <div class="col">
            <h1 class="text-center">Materias</h1>
            <div class="row">
                <div v-for="clase in clasesFiltradas" :key="clase.id" class="col-12 col-md-6">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">{{ clase.titulo }}</h5>
                            <p class="card-text">{{ clase.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>