<script setup>
import { ref } from 'vue'
import NewPreference from './NewPreference.vue'
import CitySuggestion from './CitySuggestion.vue'
import { users } from './state/user'

// Lista de usuários que possui login está no array LoginList em App.vue
const props = defineProps({
    'loggedUser': Object
})


const newSuggOpt = ref(false)
const checkSuggOpt = ref(false)

const enableCitySugg = ref(false)
const prefObj = ref({})

function checkRecomendacao() {
    newSuggOpt.value = false
    const usuario = users.find(u => u.email === props.loggedUser.email)
    if (!usuario) {
        prefObj.value = {}
    }
    else {
        prefObj.value = usuario.preferencias
    }
    if (prefObj.value != {}) {
        enableCitySugg.value = true
    }
}

</script>

<template>
    <div class="home-options">
        <h1>Bem-vindo {{ props.loggedUser.name }}</h1>
        <div v-if="!newSuggOpt && !checkSuggOpt">
            <div>
                Suas recomendações: {{ prefObj }}
            </div>
            <div id="new-sugg-opt">
                <button @click="newSuggOpt = true">NOVA RECOMENDAÇÃO</button>
            </div>
            <div id="check-sugg-opt">
                <button :disabled="!enableCitySugg" @click="checkSuggOpt = true">SUGERIR CIDADES</button>
            </div>
        </div>
    </div>
    <div id="new-sugg-window">
        <NewPreference :user="loggedUser" v-if="newSuggOpt" @save-pref="checkRecomendacao()" />
    </div>
    <div id="suggest-city-window">
        <CitySuggestion :user="loggedUser" v-if="checkSuggOpt" />
    </div>
</template>

<style scoped></style>