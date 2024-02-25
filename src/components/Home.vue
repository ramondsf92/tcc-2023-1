<script setup>
import { ref } from 'vue'
import NewPreference from './NewPreference.vue'
import CitySuggestion from './CitySuggestion.vue'
import { userPreferences } from './state/userPreferences'
import FavoriteCities from './FavoriteCities.vue';

// Lista de usuários que possui login está no array LoginList em App.vue
const props = defineProps({
    'loggedUser': Object
})

const emit = defineEmits(['logOut'])

const newSuggOpt = ref(false)
const checkSuggOpt = ref(false)
const viewBookmarks = ref(false)

const enableCitySugg = ref(false)
const prefObj = ref({})

function checkRecomendacao() {
    newSuggOpt.value = false
    const usuario = userPreferences.find(u => u.email === props.loggedUser.email)
    if (!usuario) {
        prefObj.value = {}
    }
    else {
        prefObj.value = usuario.preferencias
    }
    if (prefObj.value != {}) {
        enableCitySugg.value = true
    }
    console.log(userPreferences)
}

</script>

<template>
    <v-container class="d-flex flex-column w-75">
        <h1 class="align-self-center">Bem-vindo {{ props.loggedUser.name }}</h1>
        <div id="home-container" v-if="!newSuggOpt && !checkSuggOpt && !viewBookmarks">
            <div>
                Suas recomendações: {{ prefObj }}
            </div>
            <div id="new-sugg-opt">
                <v-btn class="mt-3" @click="newSuggOpt = true">NOVA RECOMENDAÇÃO</v-btn>
            </div>
            <div id="check-sugg-opt">
                <v-btn class="mt-3" :disabled="!enableCitySugg" @click="checkSuggOpt = true">SUGERIR CIDADES</v-btn>
            </div>
            <div id="city-bookmark-opt">
                <v-btn class="mt-3" @click="() => viewBookmarks = true">VER FAVORITOS</v-btn>
            </div>
            <div id="logout-v-btn">
                <v-btn class="mt-5" @click="$emit('logOut')">Fazer Logout</v-btn>
            </div>
            
        </div>
        <div id="new-sugg-window">
            <NewPreference :user="loggedUser" v-if="newSuggOpt" @save-pref="checkRecomendacao()" />
        </div>
        <div id="suggest-city-window">
            <CitySuggestion :user="loggedUser" v-if="checkSuggOpt" @voltar-home="() => checkSuggOpt = false" />
        </div>
        <div id="city-bookmark-window">
            <FavoriteCities :user-email="props.loggedUser.email" v-if="viewBookmarks"
                @voltar-home="() => viewBookmarks = false" />
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