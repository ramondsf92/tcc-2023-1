<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
    'cityObj': Object
})

const imgExibida = ref(0)

</script>

<template>
    <div id="city-card">
        <carousel id="img-carousel">
            <slide v-for="image in props.cityObj.imagens" :key="image">
                <img :src="image" alt="Foto" class="city-img">
            </slide>
        </carousel>
        <small>Arraste a imagem para o lado para navegar entre as fotos.</small>
        <!-- <img :src="props.cityObj.imagens[imgExibida]" alt="Foto"> -->
        <div id="city-info">
            <div id="city-info-left">
                Cidade: {{ props.cityObj.nome }}<br>
                Qtd Habit: {{ props.cityObj.qtdHab }}<br>
                Região: {{ props.cityObj.regiao }}<br>
                PIB per Capita: {{ props.cityObj.pibPerC }}
            </div>
            <div id="city-info-right">
                Emprego: {{ props.cityObj.emprego }}<br>
                Turismo: {{ props.cityObj.turismo }}<br>
                Segurança: {{ props.cityObj.seguranca }}<br>
                Educação: {{ props.cityObj.educacao }}<br>
            </div>
        </div>
    </div>
</template>

<style scoped>
#city-card {
    display: flex;
    flex-direction: column;
    place-items: center;

    border: solid brown 5px;
}

#img-carousel {
    width: 100%;
}

#city-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
}

.city-img {
    width: 100%;
    /* height: auto; */
}

/* #city-card-left,
#city-card-right {
    display: flex;
    flex-direction: column;
    place-items: center;
} */
</style>