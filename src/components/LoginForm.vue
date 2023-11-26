<script setup>
import { ref } from 'vue'

const userForm = ref({})
const emit = defineEmits(['checkLogin', 'registerUser'])

</script>

<template>
    <strong>Bem-vindo! Por favor, faça seu login para continuar.</strong><br>
    <small>Login para teste: ramon@123.com / Senha: 1234</small>
    <div class="form">
        <label for="email">E-mail </label>
        <input type="text" v-model="userForm.email">
        <label for="password">Senha </label>
        <input @keyup.enter="$emit('checkLogin', userForm)" type="password" v-model="userForm.password"><br>
        <button @click="$emit('checkLogin', userForm)">Login</button>
    </div>
    <div id="not-registered">
        <small>Ainda não é registrado? <span @click="$emit('registerUser')" id="register-link">Clique aqui</span> e faça seu
            cadastro.</small>
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

#register-link {
    font-weight: bolder;
}

#register-link:hover {
    cursor: pointer;
    color: red;
}
</style>