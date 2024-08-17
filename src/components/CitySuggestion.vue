<script setup>
import { ref, onMounted } from "vue";
import CityCard from "./CityCard.vue";

const props = defineProps({
  cidades: Array,
});

const indiceAtual = ref(0);
</script>

<template>
  <v-container class="d-flex flex-column align-items-center w-100">
    <p class="subtitle">
      Pronto! Aqui estão algumas cidades que podem lhe interessar! Navegue entre
      as cidades através dos botões <b>SUGESTÃO ANTERIOR</b> e
      <b>PRÓXIMA SUGESTÃO</b>.
    </p>
    <div>
      <CityCard class="mt-3" :city-obj="props.cidades[indiceAtual]" />
    </div>
    <div class="align-self-center mt-5" id="city-links">
      <v-btn href="https://www.trivago.com.br/" target="_blank">
        Reserve sua acomodação
      </v-btn>
    </div>
    <div class="d-flex flex-md-row flex-column mb-3 align-self-center">
      <v-btn
        class="mt-3"
        @click="() => (indiceAtual = indiceAtual - 1)"
        :disabled="indiceAtual == 0"
      >
        SUGESTÃO ANTERIOR
      </v-btn>
      <v-btn
        class="mt-3"
        @click="() => (indiceAtual = indiceAtual + 1)"
        :disabled="indiceAtual == props.cidades.length - 1"
      >
        PRÓXIMA SUGESTÃO
      </v-btn>
    </div>
    <v-btn class="mt-3 w-50 align-self-center" @click="$emit('voltarHome')">
      Voltar
    </v-btn>
  </v-container>
</template>

<style scoped>
#city-sugg {
  display: flex;
  flex-direction: column;
  place-items: center;
}

.subtitle {
  font-size: larger;
  text-align: justify;
}
</style>
