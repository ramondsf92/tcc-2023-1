<script setup>
import { ref } from "vue";
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
const prefObj = ref({});

function checkRecomendacao(valores) {
  console.log(valores);
  newSuggOpt.value = false;
  prefObj.value = valores;

  if (prefObj.value != {}) {
    enableCitySugg.value = true;
  }
  console.log(prefObj.value);
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
      <div class="mt-3">Suas recomendações: {{ prefObj }}</div>
      <div
        id="btns"
        class="w-100 d-flex flex-md-row flex-column justify-md-space-around align-center mt-md-4 mt-2"
      >
        <div id="new-sugg-opt" class="pb-2">
          <v-btn @click="newSuggOpt = true">NOVA RECOMENDAÇÃO</v-btn>
        </div>
        <div id="check-sugg-opt" class="pb-2">
          <v-btn :disabled="!enableCitySugg" @click="checkSuggOpt = true"
            >SUGERIR CIDADES</v-btn
          >
        </div>
        <div id="logout-v-btn" class="pb-2">
          <v-btn @click="$emit('logOut')">Fazer Logout</v-btn>
        </div>
      </div>
    </div>
    <div id="new-sugg-window">
      <NewPreference
        :user="loggedUser"
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
