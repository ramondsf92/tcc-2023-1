<script setup>
import { ref, reactive } from "vue";
import NewPreference from "./NewPreference.vue";
import CitySuggestion from "./CitySuggestion.vue";

// Lista de usuários que possui login está no array LoginList em App.vue
const props = defineProps({
  loggedUser: Object,
});

const emit = defineEmits(["logOut"]);

const newSuggOpt = ref(false);
const checkSuggOpt = ref(false);

const enableCitySugg = ref(false);
const prefObj = ref([]);
const citiesList = ref(null);
const questionsList = ref(null);

const listaRespostas = ref([]);

function checkRecomendacao(valores, results) {
  newSuggOpt.value = false;
  prefObj.value = valores;
  results.map((resposta, index) => (listaRespostas.value[index] = resposta));

  if (prefObj.value != {}) {
    enableCitySugg.value = true;
  }
  console.log(prefObj.value);
  console.log(listaRespostas.value);
}

async function novaRecomendacao() {
  console.log(listaRespostas);
  const url = "http://localhost:5000/info-api/questions";

  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
    questionsList.value = JSON.parse(result);
    console.log(questionsList.value);
  } catch (error) {
    console.error(error);
  }
  newSuggOpt.value = true;
}

async function sugerirCidades() {
  const url = "http://localhost:5000/info-api/city/recomendation";

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prefObj.value),
    });
    const result = await response.json();
    console.log(result);
    citiesList.value = JSON.parse(result);
    console.log(citiesList.value);
  } catch (error) {
    console.error(error);
  }
  checkSuggOpt.value = true;
}
</script>

<template>
  <v-container class="d-flex flex-column w-75">
    <h1 class="align-self-center">Bem-vindo {{ props.loggedUser.name }}</h1>
    <div id="home-container" v-if="!newSuggOpt && !checkSuggOpt">
      <div class="mt-3">
        Clique em "Nova Recomendação" para nos dizer suas preferências e depois
        clique em "Sugerir Cidades"
      </div>
      <div
        id="btns"
        class="w-100 d-flex flex-column justify-md-space-around align-center mt-md-4 mt-2"
      >
        <div id="new-sugg-opt" class="pb-2">
          <v-btn @click="novaRecomendacao">{{
            listaRespostas.length == 0
              ? "NOVA RECOMENDAÇÃO"
              : "EDITAR RECOMENDAÇÃO"
          }}</v-btn>
        </div>
        <div v-if="enableCitySugg" id="check-sugg-opt" class="pb-2">
          <v-btn :disabled="!enableCitySugg" @click="sugerirCidades"
            >SUGERIR CIDADES</v-btn
          >
        </div>
        <div id="logout-v-btn" class="pb-2 mt-5">
          <v-btn @click="$emit('logOut')">Fazer Logout</v-btn>
        </div>
      </div>
    </div>
    <div id="new-sugg-window">
      <NewPreference
        :user="loggedUser"
        :questions-list="questionsList"
        :respostas="listaRespostas"
        v-if="newSuggOpt"
        @save-pref="checkRecomendacao"
      />
    </div>
    <div id="suggest-city-window">
      <CitySuggestion
        :user="loggedUser"
        v-if="checkSuggOpt"
        @voltar-home="() => (checkSuggOpt = false)"
      />
    </div>
  </v-container>
</template>

<style scoped>
#home-container {
  display: flex;
  flex-direction: column;
  place-items: center;
}
</style>
