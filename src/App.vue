<template>
  <v-app>
    <VAppBar color="light-blue-darken-4">
      <VAppBarTitle>Título - Ainda a definir</VAppBarTitle>
    </VAppBar>
    <v-main>
      <!-- <HelloWorld /> -->
      <VContainer class="border-lg elevation-3" color="light-blue-darken-2">
        <LoginForm
          v-if="!autenticado"
          @check-login="validarLogin"
          @register-user="() => (registrandoUsuario = true)"
        />
        <Home
          v-if="autenticado"
          :logged-user="currentUser"
          @log-out="() => (autenticado = false)"
        />
        <!-- <NewUser v-if="registrandoUsuario" @register="registrarUsuario"
          @back-to-login="() => registrandoUsuario = false" /> -->
      </VContainer>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";
import LoginForm from "./components/LoginForm.vue";
import Home from "./components/Home.vue";
import NewUser from "./components/NewUser.vue";
import { loginList } from "./components/state/loginList";

// const preenchido = ref(true)

// const registrandoUsuario = ref(false)
const autenticado = ref(false);

const currentUser = ref(null);
// const atribuiUser = computed({
//   get: () => currentUser,
//   set: (user) => {
//     currentUser.value = user
//   }
// })

function validarLogin(user) {
  // atribuiUser.value = user
  // const userEncontrado = loginList.find(u => user.email === u.email && user.password === u.password)
  // // console.log(user.email, u.email)
  // // console.log(user.password, u.password)

  // console.log(userEncontrado)

  // if (userEncontrado) {
  //   atribuiUser.value = userEncontrado
  //   autenticado.value = true
  // }
  // else {
  //   alert("Usuário ou senha inválidos.")
  // }
  // console.log(currentUser.value)
  console.log(user.name);
  currentUser.value = user;
  autenticado.value = true;
}

// function registrarUsuario(user) {
//   console.log(user)
//   const userEncontrado = loginList.find(u => user.email === u.email)
//   if (userEncontrado) {
//     alert("E-mail já cadastrado. Favor realizar o login ou alterar o e-mail.")
//   }
//   else {
//     loginList.push(user)
//     alert("Usuário cadastrado com sucesso!")
//     registrandoUsuario.value = false
//   }
//   console.log(loginList)
// }
</script>
