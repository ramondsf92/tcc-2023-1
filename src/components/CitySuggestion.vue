<script setup>
import { ref } from 'vue'
import CityCard from './CityCard.vue'

// Aqui será onde armazenaremos a lista de cidades a serem sugeridas para o usuário
// Os dados sobre a cidade será passado via props para o componente CityCard, e
// também o índice do array das cidades para navegar entre os diferentes elementos do array

const cidadesTeste = ref([{
    nome: 'Rio das Ostras',
    qtdHab: 180000,
    regiao: 'Região dos Lagos',
    pibPerC: 121799.76,
    emprego: 3,
    turismo: 5,
    seguranca: 3,
    educacao: 3,
    imagens: [
        'https://www.riodasostras.rj.gov.br/wp-content/uploads/2021/01/pra%C3%A7a-3.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/b0/a1/f1/rio-das-ostras.jpg?w=1200',
        'https://www.likeparadise.com.br/wp-content/uploads/2021/10/rio-das-ostras.png']
},{
    nome: 'Macaé',
    qtdHab: 230000,
    regiao: 'Norte Fluminense',
    pibPerC: 41234.48,
    emprego: 5,
    turismo: 2,
    seguranca: 2,
    educacao: 3,
    imagens: [
        'https://elquarto.com/blog/wp-content/uploads/2022/04/Macae-RJ.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/bd/Lix%C3%A3o_da_Estrutural_%2815672548605%29.jpg',
        'https://i.ytimg.com/vi/hhM3MaTc2LU/hqdefault.jpg'] 
}])

const indiceAtual = ref(0)

console.log(cidadesTeste.value.length)

</script>

<template>
    <div id="city-sugg">
        <div>
            <CityCard :city-obj="cidadesTeste[indiceAtual]" />
        </div>
        <div id="city-set-bookmark">
                Clique para marcar como favorito
        </div>
        <div id="city-nav-buttons">
            <button @click="() => indiceAtual = indiceAtual - 1" :disabled="indiceAtual == 0">SUGESTÃO ANTERIOR</button>
            <button @click="() => indiceAtual = indiceAtual + 1" :disabled="indiceAtual == 1">PRÓXIMA SUGESTÃO</button>
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