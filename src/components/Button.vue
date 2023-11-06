<script setup>
import { ref } from 'vue'

defineProps(['part'])
defineEmits(['mudarPart'])

function saudacao(num) {
    alert(`Olá, participante número ${num}`)
}

</script>

<template>
    <button @click="$emit('mudarPart', part)">{{ part }}</button>
</template>

<style scoped>

</style>