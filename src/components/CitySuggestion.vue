<script setup>
import { ref } from 'vue'
import CityCard from './CityCard.vue'
import { cities } from './state/cities'
import { bookmarks } from './state/bookmarks'

// Aqui será onde instanciaremos a lista de cidades a serem sugeridas para o usuário
// Os dados sobre a cidade será passado via props para o componente CityCard, e
// também o índice do array das cidades para navegar entre os diferentes elementos do array

// const props = defineProps({
//     'user': Object
// })



const indiceAtual = ref(0)

console.log(cities.length)

</script>

<template>
    <div id="city-sugg">
        <div>
            <CityCard :city-obj="cities[indiceAtual]" />
        </div>
        <div id="city-set-bookmark">
            Clique para marcar como favorito
        </div>
        <div id="city-nav-buttons">
            <button @click="() => indiceAtual = indiceAtual - 1" :disabled="indiceAtual == 0">SUGESTÃO ANTERIOR</button>
            <button @click="() => indiceAtual = indiceAtual + 1" :disabled="indiceAtual == cities.length - 1">PRÓXIMA
                SUGESTÃO</button>
        </div>
        <div id="city-back-button">
            <button @click="$emit('voltarHome')">Voltar</button>
        </div>
    </div>
</template>

<style scoped>
#city-sugg {
    display: flex;
    flex-direction: column;
    place-items: center;
}
</style>