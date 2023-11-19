<script setup>
import { ref } from 'vue'
import CityCard from './CityCard.vue'

// Aqui será onde armazenaremos a lista de cidades a serem sugeridas para o usuário
// Os dados sobre a cidade será passado via props para o componente CityCard, e
// também o índice do array das cidades para navegar entre os diferentes elementos do array

const cidadeTeste = ref({
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
})

</script>

<template>
    <div>
        <CityCard :city-obj="cidadeTeste" />
    </div>
</template>

<style scoped></style>