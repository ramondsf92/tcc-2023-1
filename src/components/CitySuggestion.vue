<script setup>
import { ref } from "vue";
import CityCard from "./CityCard.vue";
import { cities } from "./state/cities";
import { bookmarks } from "./state/bookmarks";

// Aqui será onde instanciaremos a lista de cidades a serem sugeridas para o usuário
// Os dados sobre a cidade será passado via props para o componente CityCard, e
// também o índice do array das cidades para navegar entre os diferentes elementos do array

// const props = defineProps({
//     'user': Object
// })

const indiceAtual = ref(0);

console.log(cities.length);
</script>

<template>
  <v-container class="d-flex flex-column">
    <div>
      <CityCard :city-obj="cities[indiceAtual]" />
    </div>
    <div class="align-self-center" id="city-links">
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
        :disabled="indiceAtual == cities.length - 1"
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
</style>
