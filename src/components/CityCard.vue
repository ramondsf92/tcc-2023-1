<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  cityObj: Object,
});

onMounted(() => {
  console.log(props.cityObj);
});

function searchGoogle(cityName) {
  window.open(
    `https://www.google.com/search?q=${cityName.replaceAll(" ", "+")}`,
    "_blank"
  );
}

const imgExibida = ref(0);
</script>

<template>
  <v-container
    class="d-flex flex-column w-100 roboto-condensed-std elevation-5"
  >
    <div class="mb-5 align-self-center font-weight-bold font-plus">
      {{ props.cityObj.name }}
    </div>
    <div
      id="city-info"
      class="d-flex flex-column flex-md-row mt-2 align-center"
    >
      <div id="city-info-left" class="mb-2">
        Cidade:
        {{ props.cityObj.name.substring(0, props.cityObj.name.indexOf("-") - 1)
        }}<br />
        Estado:
        {{ props.cityObj.name.substring(props.cityObj.name.indexOf("-") + 2)
        }}<br />
        Número de Habitantes: {{ props.cityObj.population }}<br />
        IDH: {{ props.cityObj.idh }}<br />
        Custo de vida médio: R${{ props.cityObj.avg_coust_living_price }}
      </div>
      <div id="city-info-right" class="mb-2">
        Quantidade de empresas:
        {{ props.cityObj.enterprises_amount }}<br />
        Densidade demográfica: {{ props.cityObj.demographic_density }}<br />
        Taxa de Segurança: {{ props.cityObj.securityRate }}<br />
        Taxa de Escolaridade: {{ props.cityObj.scholarity_rate }}<br />
        Índice de lazer: {{ props.cityObj.recreation_rate }}
      </div>
    </div>
    <div id="city-list-business-type" class="mb-2 align-self-center">
      <span class="roboto-condensed-bold"
        ><u>Principais tipos de negócio</u></span
      >
      <ul class="mt-3">
        <li v-for="type in props.cityObj.most_current_type_enterprises">
          {{ type }}
        </li>
      </ul>
    </div>
    <div class="align-self-center">
      Quer saber mais sobre a cidade? Clique
      <div
        id="search-link"
        class="d-inline"
        @click="() => searchGoogle(props.cityObj.name)"
      >
        aqui
      </div>
      e faça a sua pesquisa!
    </div>
  </v-container>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap");

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

.roboto-condensed-std {
  font-family: "Roboto Condensed", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.city-img {
  width: 100%;
}

#search-link {
  font-weight: bold;
}

#search-link:hover {
  cursor: pointer;
  color: red;
}

.font-plus {
  font-size: x-large;
}
</style>
