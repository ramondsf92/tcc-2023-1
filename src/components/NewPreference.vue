<script setup>
import { ref, reactive, onMounted } from "vue";

const props = defineProps({
  user: Object,
  questionsList: Array,
  respostas: Array,
});

onMounted(() => {
  if (props.respostas.length == 0) {
    results.value = Array.apply(null, Array(12)).map(
      Number.prototype.valueOf,
      0
    );
  } else {
    props.respostas.map((num) => results.push(num));
  }
});

// variável das perguntas já com resposta e incluso valores de custo
const questionsFull = JSON.parse(JSON.stringify(props.questionsList));

const emit = defineEmits(["savePref"]);

const results = reactive([]);

function autoFillRespostas() {
  for (let i = 0; i < props.questionsList.length; i++) {
    results.push(Math.floor(Math.random() * 5) + 1);
  }
  console.log(results);
}

function salvarPreferencia(q, r) {
  questionsFull.forEach((question, index) => {
    question.answer = results[index];
  });

  emit("savePref", questionsFull, results);
}
</script>

<template>
  <div>
    <v-btn @click="autoFillRespostas">
      Clique aqui pra preencher automaticamente
    </v-btn>
  </div>
  <v-container class="d-flex flex-column">
    <p class="align-self-center mb-5 mt-2 text-h6">
      Responda as perguntas marcando apenas um valor, de 1 a 5, em grau de
      importância.
    </p>
    <div class="d-flex flex-column justify-space-around place-items-center">
      <div
        class=""
        v-for="(question, index) in props.questionsList"
        :key="index"
      >
        {{ index + 1 }} - {{ question.title }}
        <v-radio-group
          class="align-self-center"
          inline
          v-model="results[index]"
        >
          <v-radio class="pr-2" label="1" :value="1"></v-radio>
          <v-radio class="pr-2" label="2" :value="2"></v-radio>
          <v-radio class="pr-2" label="3" :value="3"></v-radio>
          <v-radio class="pr-2" label="4" :value="4"></v-radio>
          <v-radio class="pr-2" label="5" :value="5"></v-radio>
        </v-radio-group>
      </div>
    </div>
    <v-btn
      class="w-50 align-self-center mt-3"
      :disabled="
        results.length < props.questionsList.length ||
        results.filter((result) => result != null).length != results.length
      "
      id="salvar"
      @click="salvarPreferencia(questionsFull, results)"
      >Salvar</v-btn
    >
  </v-container>
</template>

<style scoped></style>
