<script setup>
import { ref, reactive } from "vue";
import axios from "axios";
import NewPreference from "./NewPreference.vue";
import CitySuggestion from "./CitySuggestion.vue";
import LoadingModal from "./LoadingModal.vue";

// Lista de usuários que possui login está no array LoginList em App.vue
const props = defineProps({
  loggedUser: Object,
});

const emit = defineEmits(["logOut"]);

const loadingQuestions = ref(false);
const loadingCities = ref(false);
const loadingMessage = ref("Loading...");

const newSuggOpt = ref(false);
const checkSuggOpt = ref(false);

const enableCitySugg = ref(false);
const prefObj = ref([]);
const questionsList = ref(null);

const listaRespostas = ref([]);

const listaCidades = ref([]);

function checkRecomendacao(valores, results) {
  newSuggOpt.value = false;
  prefObj.value = valores;
  results.map((resposta, index) => (listaRespostas.value[index] = resposta));

  if (prefObj.value != {}) {
    enableCitySugg.value = true;
  }
  console.log("Objetos resposta");
  console.log(prefObj.value);
  // console.log("Respostas AQUI!");
  // console.log(listaRespostas.value);
}

async function novaRecomendacao() {
  const url = "http://localhost:5000/info-api/questions";
  loadingQuestions.value = true;
  try {
    const response = await fetch(url);
    const result = await response.text();
    // console.log("Result: " + result);
    questionsList.value = JSON.parse(result);
    // console.log(questionsList.value);
  } catch (error) {
    console.error(error);
  }
  loadingQuestions.value = false;
  newSuggOpt.value = true;
}

async function sugerirCidades() {
  const url = "http://localhost:5000/info-api/city/recomendation";
  loadingCities.value = true;
  await axios.post(url, prefObj.value).then((res) => {
    console.log(res.data);
    listaCidades.value = [...res.data];
  });
  loadingCities.value = false;
  checkSuggOpt.value = true;
  console.log(listaCidades.value);
}

// async function sugerirCidades() {
// //   const url = "http://localhost:5000/info-api/city/recomendation";

// //   try {
// //     const response = await fetch(url, {
// //       method: "POST",

// //       body: JSON.stringify(prefObj.value),
// //     });
// //     // const result = await response.json();
// //     // console.log(result);
// //     // citiesList.value = JSON.parse(result);
// //     // console.log(citiesList.value);
// //   } catch (error) {
// //     console.error(error);
// //   }
// //   checkSuggOpt.value = true;
// // }
</script>

<template>
  <v-container class="d-flex flex-column w-75">
    <div id="home-container" v-if="!newSuggOpt && !checkSuggOpt">
      <h1 class="align-self-center">Bem-vindo, {{ props.loggedUser.name }}!</h1>
      <div id="msg-boasvindas" class="mt-3">
        <p class="mb-2">
          Se você procura uma cidade para morar e está em dúvida, você está no
          lugar certo! Apenas nos diga seus gostos e cuidaremos de
          <strong>tudo</strong>!
        </p>
        <p class="mb-2">
          Clique em <strong>Nova Recomendação</strong> para nos dizer suas
          preferências e depois clique em <strong>Sugerir Cidades</strong> para
          receber uma lista de cidades que são a sua cara!
        </p>
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
        <div v-if="loadingQuestions">{{ loadingMessage }}</div>
        <div id="check-sugg-opt" class="pb-2">
          <v-btn
            :color="enableCitySugg ? 'light-blue-darken-3' : 'undefined'"
            :disabled="!enableCitySugg"
            @click="sugerirCidades"
            >SUGERIR CIDADES</v-btn
          >
        </div>
        <div v-if="loadingCities">Carregando cidades...</div>
        <div id="logout-v-btn" class="pb-2 mt-5">
          <v-btn @click="$emit('logOut')">Fazer Logout</v-btn>
        </div>
        <LoadingModal
          :visible="loadingQuestions || loadingCities"
        ></LoadingModal>
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
        v-if="checkSuggOpt"
        :cidades="listaCidades"
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

#msg-boasvindas {
  text-align: center;
}
</style>
