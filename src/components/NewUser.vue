<script setup>
import { ref } from 'vue'

const newUserForm = ref({})

const emit = defineEmits(['register', 'backToLogin'])

</script>

<template>
    <strong>Bem-vindo! Por favor, preencha com seus dados para se cadastrar.</strong><br>
    <div class="register-form">
        <label for="name">Nome </label>
        <input type="text" v-model="newUserForm.name">
        <label for="email">E-mail </label>
        <input type="text" v-model="newUserForm.email">
        <label for="password">Senha </label>
        <input type="password" v-model="newUserForm.password"><br>
        <button @click="$emit('register', newUserForm)">Cadastrar-se</button>
        <button @click="$emit('backToLogin')">Voltar para Login</button>
    </div>
</template>

<style scoped>
.register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
}

.register-form input {
    padding-bottom: 5px;
}
</style>