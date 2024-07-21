<script setup>
import { onUpdated } from "vue";
import { ref, reactive, onMounted } from "vue";

const props = defineProps({
  user: Object,
  questionsList: Array,
  respostas: Array,
});

onMounted(() => {
  console.log(props.respostas);
  if (props.respostas.length == 0) {
    console.log("É zero");
    results.value = Array.apply(null, Array(12)).map(
      Number.prototype.valueOf,
      0
    );
  } else {
    console.log("Não é zero");
    props.respostas.map((num) => results.push(num));
  }
  console.log(results);
});

// variável das perguntas já com resposta e incluso valores de custo
const questionsFull = JSON.parse(JSON.stringify(props.questionsList));

const emit = defineEmits(["savePref"]);

const results = reactive([]);

// Preenchendo os valores de custo nos intervalos de respostas de 1 a 5
const conversaoCustoInverso = ref([
  {
    energia: 2244,
    agua: 845,
    alimentacao: 895,
    higiene: 225,
    transporte: 1440,
    saude: 650,
    recreacao: 245,
  },
  {
    energia: 1893,
    agua: 689,
    alimentacao: 745,
    higiene: 193,
    transporte: 1160,
    saude: 515,
    recreacao: 190,
  },
  {
    energia: 1543,
    agua: 532,
    alimentacao: 595,
    higiene: 160,
    transporte: 880,
    saude: 380,
    recreacao: 137,
  },
  {
    energia: 1192,
    agua: 375,
    alimentacao: 445,
    higiene: 127,
    transporte: 600,
    saude: 245,
    recreacao: 85,
  },
  {
    energia: 842,
    agua: 218,
    alimentacao: 295,
    higiene: 95,
    transporte: 320,
    saude: 110,
    recreacao: 33,
  },
]);

const conversaoCusto = ref([
  {
    energia: 842,
    agua: 218,
    alimentacao: 295,
    higiene: 95,
    transporte: 320,
    saude: 110,
    recreacao: 33,
  },
  {
    energia: 1192,
    agua: 375,
    alimentacao: 445,
    higiene: 127,
    transporte: 600,
    saude: 245,
    recreacao: 85,
  },
  {
    energia: 1543,
    agua: 532,
    alimentacao: 595,
    higiene: 160,
    transporte: 880,
    saude: 380,
    recreacao: 137,
  },
  {
    energia: 1893,
    agua: 689,
    alimentacao: 745,
    higiene: 193,
    transporte: 1160,
    saude: 515,
    recreacao: 190,
  },
  {
    energia: 2244,
    agua: 845,
    alimentacao: 895,
    higiene: 225,
    transporte: 1440,
    saude: 650,
    recreacao: 245,
  },
]);

function salvarPreferencia(q, r) {
  questionsFull.forEach((question, index) => {
    question.answer = results[index];
  });

  // Preenchendo os valores de custo de acordo com a resposta das questões no FormResult
  questionsFull[0].hoursLightEstimate = 0;
  questionsFull[0].ltWaterConsume = 0;
  questionsFull[0].alimentation = 0;
  questionsFull[0].hygiene = 0;
  questionsFull[0].transportation =
    conversaoCustoInverso.value[questionsFull[0].answer - 1].transporte;
  questionsFull[0].health = 0;
  questionsFull[0].recreation = 0;

  questionsFull[1].hoursLightEstimate = 0;
  questionsFull[1].ltWaterConsume = 0;
  questionsFull[1].alimentation = 0;
  questionsFull[1].hygiene = 0;
  questionsFull[1].transportation = 0;
  questionsFull[1].health = 0;
  questionsFull[1].recreation =
    conversaoCustoInverso.value[questionsFull[1].answer - 1].recreacao;

  questionsFull[2].hoursLightEstimate = 0;
  questionsFull[2].ltWaterConsume = 0;
  questionsFull[2].alimentation =
    conversaoCusto.value[questionsFull[2].answer - 1].alimentacao;
  questionsFull[2].hygiene = 0;
  questionsFull[2].transportation =
    conversaoCusto.value[questionsFull[2].answer - 1].transporte;
  questionsFull[2].health = 0;
  questionsFull[2].recreation =
    conversaoCusto.value[questionsFull[2].answer - 1].recreacao;

  questionsFull[3].hoursLightEstimate = 0;
  questionsFull[3].ltWaterConsume = 0;
  questionsFull[3].alimentation = 0;
  questionsFull[3].hygiene = 0;
  questionsFull[3].transportation = 0;
  questionsFull[3].health = 0;
  questionsFull[3].recreation = 0;

  questionsFull[4].hoursLightEstimate = 0;
  questionsFull[4].ltWaterConsume = 0;
  questionsFull[4].alimentation =
    conversaoCusto.value[questionsFull[4].answer - 1].alimentacao;
  questionsFull[4].hygiene = 0;
  questionsFull[4].transportation = 0;
  questionsFull[4].health = 0;
  questionsFull[4].recreation =
    conversaoCusto.value[questionsFull[4].answer - 1].recreacao;

  questionsFull[5].hoursLightEstimate =
    conversaoCusto.value[questionsFull[5].answer - 1].energia;
  questionsFull[5].ltWaterConsume =
    conversaoCusto.value[questionsFull[5].answer - 1].agua;
  questionsFull[5].alimentation = 0;
  questionsFull[5].hygiene = 0;
  questionsFull[5].transportation = 0;
  questionsFull[5].health = 0;
  questionsFull[5].recreation = 0;

  questionsFull[6].hoursLightEstimate = 0;
  questionsFull[6].ltWaterConsume = 0;
  questionsFull[6].alimentation = 0;
  questionsFull[6].hygiene = 0;
  questionsFull[6].transportation =
    conversaoCustoInverso.value[questionsFull[6].answer - 1].transporte;
  questionsFull[6].health = 0;
  questionsFull[6].recreation = 0;

  questionsFull[7].hoursLightEstimate = 0;
  questionsFull[7].ltWaterConsume = 0;
  questionsFull[7].alimentation = 0;
  questionsFull[7].hygiene = 0;
  questionsFull[7].transportation =
    conversaoCusto.value[questionsFull[7].answer - 1].transporte;
  questionsFull[7].health = 0;
  questionsFull[7].recreation = 0;

  questionsFull[8].hoursLightEstimate = 0;
  questionsFull[8].ltWaterConsume = 0;
  questionsFull[8].alimentation =
    conversaoCusto.value[questionsFull[8].answer - 1].alimentacao;
  questionsFull[8].hygiene = 0;
  questionsFull[8].transportation =
    conversaoCusto.value[questionsFull[8].answer - 1].transporte;
  questionsFull[8].health = 0;
  questionsFull[8].recreation =
    conversaoCusto.value[questionsFull[8].answer - 1].recreacao;

  questionsFull[9].hoursLightEstimate = 0;
  questionsFull[9].ltWaterConsume = 0;
  questionsFull[9].alimentation = 0;
  questionsFull[9].hygiene = 0;
  questionsFull[9].transportation = 0;
  questionsFull[9].health = 0;
  questionsFull[9].recreation = 0;

  questionsFull[10].hoursLightEstimate = 0;
  questionsFull[10].ltWaterConsume = 0;
  questionsFull[10].alimentation = 0;
  questionsFull[10].hygiene = 0;
  questionsFull[10].transportation = 0;
  questionsFull[10].health = 0;
  questionsFull[10].recreation = 0;

  questionsFull[11].hoursLightEstimate = 0;
  questionsFull[11].ltWaterConsume = 0;
  questionsFull[11].alimentation = 0;
  questionsFull[11].hygiene = 0;
  questionsFull[11].transportation = 0;
  questionsFull[11].health = 0;
  questionsFull[11].recreation = 0;

  emit("savePref", questionsFull, results);
}
</script>

<template>
  <v-container class="d-flex flex-column">
    {{ results }}
    <p class="align-self-center mb-3">
      Selecione os valores das características em grau de importância de 1 a 5.
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
    {{ results.includes(null) }}
    {{ results.filter((result) => result != null) }}
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
