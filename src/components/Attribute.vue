<script setup>
import { ref } from 'vue'
import Star from './Star.vue';

const level = ref(null)

const props = defineProps({
    'name': String
})

</script>

<template>
    <div>
        <label for="name">{{ props.name }}</label><br>
        <Star v-for="n in 5" :value="n" :checked="false"/>
    </div>
</template>

<style scoped>

</style>