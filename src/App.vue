<script setup>
import { ref, computed } from 'vue'
import LoginForm from './components/LoginForm.vue';
import Home from './components/Home.vue'
import NewUser from './components/NewUser.vue';

// const preenchido = ref(true)

const loginList = ref([{
  name: 'Ramon',
  email: 'ramon@123.com',
  password: '1234'
},
{
  name: 'Ramon2',
  email: 'ramon2@123.com',
  password: '5555'
}
])

const registrandoUsuario = ref(false)
const autenticado = ref(false)

const currentUser = ref(null)
const atribuiUser = computed({
  get: () => currentUser,
  set: (user) => {
    currentUser.value = user
  }
})

function validarLogin(user) {
  const userEncontrado = loginList.value.find(u => user.email === u.email && user.password === u.password)
  // console.log(user.email, u.email)
  // console.log(user.password, u.password)

  console.log(userEncontrado)

  if (userEncontrado) {
    atribuiUser.value = userEncontrado
    autenticado.value = true
  }
  else {
    alert("Usuário ou senha inválidos.")
  }
  console.log(currentUser.value)

}

function registrarUsuario(user) {
  console.log(user)
  const userEncontrado = loginList.value.find(u => user.email === u.email)
  if (userEncontrado) {
    alert("E-mail já cadastrado. Favor realizar o login ou alterar o e-mail.")
  }
  else {
    loginList.value.push(user)
    alert("Usuário cadastrado com sucesso!")
    registrandoUsuario.value = false
  }
  console.log(loginList)
}

</script>

<template>
  <header>
    <img src="@/assets/avatar_0925.jpg" alt="sss">
  </header>
  <main>
    <LoginForm v-if="!autenticado && !registrandoUsuario" @check-login="validarLogin"
      @register-user="() => registrandoUsuario = true" />
    <Home v-if="autenticado" :logged-user="currentUser" @log-out="() => autenticado = false" />
    <NewUser v-if="registrandoUsuario" @register="registrarUsuario" @back-to-login="() => registrandoUsuario = false" />
  </main>

  <footer>
    Footer
  </footer>
</template>

<style scoped>
* {
  color: gray;
}

header {
  grid-area: header;
  background-color: blueviolet;
  place-self: center;
}

main {
  grid-area: main;
  background-color: bisque;
  place-self: center;
}

footer {
  grid-area: footer;
  background-color: chocolate;
}
</style>
