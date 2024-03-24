<script setup>
import { ref } from "vue";

const props = defineProps({
  user: Object,
});

const emit = defineEmits(["savePref"]);

const valores = ref({
  custoImovel: 0,
  custoVida: 0,
  tipoCidade: "",
});

function salvarPreferencia(v) {
  valores.value.custoImovel = v.custoImovel;
  valores.value.custoVida = v.custoVida;
  valores.value.tipoCidade = v.tipoCidade;

  console.log(valores.value);

  emit("savePref", valores.value);
}

function verificarVazio() {
  if (
    valores.value.custoImovel == 0 ||
    valores.value.custoVida == 0 ||
    valores.value.tipoCidade == ""
  ) {
    return true;
  }
  return false;
}
</script>

<template>
  <v-container class="d-flex flex-column">
    <p class="align-self-center mb-3">
      Selecione os valores das características em grau de importância de 1 a 5.
    </p>
    <div class="d-flex flex-md-row flex-column justify-space-around">
      <div>
        <span>Custo do imóvel</span>
        <v-select
          id="select-custo-imovel"
          v-model="valores.custoImovel"
          :items="['1', '2', '3', '4', '5']"
        >
        </v-select>
      </div>
      <div>
        <span>Custo de vida</span>
        <v-select
          id="select-custo-vida"
          v-model="valores.custoVida"
          :items="['1', '2', '3', '4', '5']"
        >
        </v-select>
      </div>
      <div>
        <span>Tipo de Cidade</span>
        <v-select
          id="select-tipo-cidade"
          v-model="valores.tipoCidade"
          :items="['Pequena', 'Grande']"
        >
        </v-select>
      </div>
    </div>
    <v-btn
      class="w-50 align-self-center mt-3"
      :disabled="verificarVazio()"
      id="salvar"
      @click="salvarPreferencia(valores)"
      >Salvar</v-btn
    >
  </v-container>
</template>

<style scoped></style>
