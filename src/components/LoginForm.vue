<script setup>
import { ref } from 'vue'

const userForm = ref({})
const emit = defineEmits(['checkLogin'])

</script>

<template>   
<strong>Bem-vindo! Por favor, faça seu login para continuar.</strong> 
<div class="form">
    <label for="email">E-mail </label>
    <input type="text" v-model="userForm.email">
    <label for="password">Senha </label>
    <input type="password" v-model="userForm.password"><br>
    <button @click="$emit('checkLogin', userForm)">Login</button>
</div>
<div id="not-registered">
    <small>Ainda não é registrado? Clique aqui e faça seu cadastro.</small>
</div>
</template>

<style scoped>



.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
}

.form>input {
    padding-bottom: 5px;
}

</style>