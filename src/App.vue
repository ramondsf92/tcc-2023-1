<template>
  <v-app>
    <VAppBar color="light-blue-darken-4">
      <VAppBarTitle>SRC - Sistema de Recomendação de Cidades</VAppBarTitle>
    </VAppBar>
    <v-main>
      <!-- <HelloWorld /> -->
      <VContainer class="border-lg elevation-3" color="light-blue-darken-2">
        <LoginForm
          v-if="!autenticado"
          class="w-100"
          @check-login="validarLogin"
          @register-user="() => (registrandoUsuario = true)"
        />
        <Home
          v-if="autenticado"
          :logged-user="currentUser"
          @log-out="() => (autenticado = false)"
        />
      </VContainer>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
import Home from "./components/Home.vue";

const autenticado = ref(false);

const currentUser = ref(null);

function validarLogin(user) {
  console.log(user.name);
  currentUser.value = user;
  autenticado.value = true;
}
</script>
