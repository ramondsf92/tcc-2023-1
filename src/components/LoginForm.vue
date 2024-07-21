<script setup>
import { ref } from "vue";

const userForm = ref({});
const emit = defineEmits(["checkLogin", "registerUser"]);
</script>

<template>
  <v-container class="d-flex flex-column align-center border w-25">
    <v-icon icon="mdi-home" />
    <strong>Bem-vindo! Como você se chama?</strong>
    <v-text-field
      class="align-self-stretch mt-3"
      label="Nome"
      v-model="userForm.name"
    ></v-text-field>
    <v-btn
      class="mt-2 mb-2"
      color="light-blue-accent-3"
      @click="$emit('checkLogin', userForm)"
      >Login</v-btn
    >
  </v-container>
</template>

<style scoped>
.w-50p {
  width: 50px;
}

/* .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
}

.form>input {
    padding-bottom: 5px;
} */

#register-link {
  font-weight: bolder;
}

#register-link:hover {
  cursor: pointer;
  color: red;
}
</style>
