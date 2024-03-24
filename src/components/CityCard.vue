<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const props = defineProps({
  cityObj: Object,
});

const imgExibida = ref(0);
</script>

<template>
  <v-container class="d-flex flex-column w-100">
    <div class="mb-3 text-h2 align-self-center">
      {{ props.cityObj.nome }}
    </div>
    <v-carousel show-arrows="hover">
      <v-carousel-item
        v-for="image in props.cityObj.imagens"
        :key="image"
        :src="image"
        cover
      ></v-carousel-item>
    </v-carousel>
    <small class="align-self-center"
      >Clique na seta nas bordas da imagem para navegar entre as fotos.</small
    >
    <div
      id="city-info"
      class="d-flex flex-column flex-md-row mt-2 align-center"
    >
      <div id="city-info-left" class="mb-2">
        Cidade: {{ props.cityObj.nome }}<br />
        Qtd Habit: {{ props.cityObj.qtdHab }}<br />
        Região: {{ props.cityObj.regiao }}<br />
        PIB per Capita: {{ props.cityObj.pibPerC }}
      </div>
      <div id="city-info-right" class="mb-2">
        Emprego: {{ props.cityObj.emprego }}<br />
        Turismo: {{ props.cityObj.turismo }}<br />
        Segurança: {{ props.cityObj.seguranca }}<br />
        Educação: {{ props.cityObj.educacao }}<br />
      </div>
    </div>
  </v-container>
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
</style>
