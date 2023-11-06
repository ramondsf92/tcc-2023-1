<script setup>
import { ref, onMounted } from 'vue'
import Button from './Button.vue';

const participanteAtual = ref(0)
const lista = ref([
    1,2,3,4,5,6
])
// const buttonWidth = ref(16.6)

onMounted(() => {
    participanteAtual.value = "Participante atual"
}) 

</script>

<template>
    <div>
        <h1 style="text-align: center;">{{ participanteAtual }}</h1>
        <div class="lista-botoes">
            <Button 
                v-for="num in lista" 
                :key="num" 
                :part="num" 
                @mudarPart="(num) => participanteAtual=num"
                style="width: 100%"/>
        </div>
    </div>
    <div>Meio</div>
    <div>Direita</div>
</template>

<style>

.lista-botoes {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
}

</style>