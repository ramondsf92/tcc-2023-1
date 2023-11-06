<script setup>
import { ref, computed } from 'vue'
import LoginForm from './components/LoginForm.vue';
import Home from './components/Home.vue'

const preenchido = ref(true)

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

  if(userEncontrado) {
    atribuiUser.value = userEncontrado
    autenticado.value = true
  }
  console.log(currentUser.value)

}

</script>

<template>
    <header>
      <img src="@/assets/avatar_0925.jpg" alt="sss">
    </header>
    <main>
      <LoginForm
        v-if="!autenticado" 
        @check-login="validarLogin"/>
      <Home 
        v-if="autenticado"
        :logged-user="currentUser"/>
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
