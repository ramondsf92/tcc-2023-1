<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  cityObj: Object,
});

onMounted(() => {
  console.log(props.cityObj);
});

const imgExibida = ref(0);
</script>

<template>
  <v-container class="d-flex flex-column w-100">
    <div class="mb-5 text-h2 align-self-center">
      {{ props.cityObj.name }}
    </div>
    <div
      id="city-info"
      class="d-flex flex-column flex-md-row mt-2 align-center"
    >
      <div id="city-info-left" class="mb-2">
        Cidade: {{ props.cityObj.name }}<br />
        Qtd Habit: {{ props.cityObj.population }}<br />
        IDH: {{ props.cityObj.idh }}
      </div>
      <div id="city-info-right" class="mb-2">
        Apenas para teste Quantidade de empresas:
        {{ props.cityObj.enterprises_amount }}<br />
        Densidade demográfica: {{ props.cityObj.demographic_amount }}<br />
        Taxa de Segurança: {{ props.cityObj.securityRate }}<br />
        Taxa de Escolaridade: {{ props.cityObj.scholarity_rate }}<br />
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
}
</style>
