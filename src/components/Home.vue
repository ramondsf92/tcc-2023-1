<script setup>
import { ref } from 'vue'
import AttributesList from './AttributesList.vue';
import NewSuggestion from './NewSuggestion.vue'

const props = defineProps({
    'loggedUser': Object
})

const newSuggOpt = ref(false)
const checkSuggOpt = ref(false)

</script>

<template>
    <div class="home-options">
        <h1>Bem-vindo {{ props.loggedUser.name }}</h1>
        <div v-if="!newSuggOpt && !checkSuggOpt">
            <div id="new-sugg-opt">
                <button @click="newSuggOpt = true">+</button><span>NOVA RECOMENDAÇÃO</span>
            </div>
            <div id="check-sugg-opt">
                <button>#</button><span>CONSULTAR RECOMENDAÇÕES</span>
            </div>
        </div>
    </div>
    <div id="new-sugg-window">
        <NewSuggestion :user="loggedUser" v-if="newSuggOpt" />
    </div>
</template>