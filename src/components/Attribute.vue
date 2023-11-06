<script setup>
import { ref, reactive, computed } from 'vue'
import Star from './Star.vue';

const level = ref(null)

const props = defineProps({
    'name': String
})

const checkedStars = reactive({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
})

function checkStar(num) {
    Object.keys(checkedStars).forEach(n => {
        if(n<=num)
            checkedStars[n] = true
    })
    console.log(checkedStars)
}

</script>

<template>
    <div>
        <label for="name">{{ props.name }}</label><br>
        <Star v-for="n in 5" :value="n" @check-star="checkStar" :checked="checkedStars"/>
    </div>
</template>

<style scoped>

</style>