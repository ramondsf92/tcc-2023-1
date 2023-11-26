<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import CityCard from './CityCard.vue'
import { cities } from './state/cities'
import { loginList } from './state/loginList';
import { bookmarks } from './state/bookmarks';

const props = defineProps({
    'userEmail': String,
})

const indiceAtual = ref(0)
const cidadesFav = ref([])

onBeforeMount(() => {
    const nomeCidadesFav = bookmarks.find(u => u.email === props.userEmail).favCities
    console.log(nomeCidadesFav)
    nomeCidadesFav.forEach(c => {
        cidadesFav.value.push(cities.find(city => city.nome == c))
    })
    console.log(cidadesFav.value)
})

</script>

<template>
    <div id="city-fav">
        <div>
            <CityCard :city-obj="cidadesFav[indiceAtual]" />
        </div>
        <div id="fav-nav-buttons">
            <button @click="() => indiceAtual = indiceAtual - 1" :disabled="indiceAtual == 0">SUGESTÃO ANTERIOR</button>
            <button @click="() => indiceAtual = indiceAtual + 1" :disabled="indiceAtual == cidadesFav.length - 1">PRÓXIMA
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