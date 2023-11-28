<script setup>
import { ref } from 'vue'

const newUserForm = ref({})

const emit = defineEmits(['register', 'backToLogin'])

</script>

<template>
    <v-container class="d-flex flex-column align-center margin w-25">
        <strong>Bem-vindo! Por favor, preencha com seus dados para se cadastrar.</strong>
        <v-text-field class="align-self-stretch" label="Nome" v-model="newUserForm.name"></v-text-field>
        <v-text-field class="align-self-stretch" label="E-mail" v-model="newUserForm.email"></v-text-field>
        <v-text-field class="align-self-stretch" label="Senha" type="password"
            v-model="newUserForm.password"></v-text-field>
        <v-btn class="mt-2" color="light-blue-accent-3" @click="$emit('register', newUserForm)">Cadastrar-se</v-btn>
        <v-btn class="mt-2" color="light-blue-accent-3" @click="$emit('backToLogin')">Voltar para Login</v-btn>
    </v-container>
</template>

<style scoped>
/* .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
}

.register-form input {
    padding-bottom: 5px;
} */
</style>