<script setup>
import { ref } from 'vue'
import AttributesList from './AttributesList.vue';
import NewPreference from './NewPreference.vue'
import { users } from './state/user'

const props = defineProps({
    'loggedUser': Object
})

const newSuggOpt = ref(false)
const checkSuggOpt = ref(false)

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
                <button :disabled="prefObj == {}">SUGERIR CIDADES</button>
            </div>
        </div>
    </div>
    <div id="new-sugg-window">
        <NewPreference :user="loggedUser" v-if="newSuggOpt" @save-pref="checkRecomendacao()" />
    </div>
    <div id="suggest-city-window">

    </div>
</template>