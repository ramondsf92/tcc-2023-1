<script setup>
import { ref } from 'vue'
import AttributesList from './AttributesList.vue';

const props = defineProps({
    'loggedUser': Object
})

</script>

<template>
<div>
    <h1>Bem-vindo {{ loggedUser.name }}</h1>
    <p>
        Para receber uma recomendação de cidade, favor selecionar suas preferências:
    </p>
    <AttributesList />
</div>
</template>