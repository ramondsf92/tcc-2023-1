<script setup>
import { ref } from 'vue'
import { userPreferences } from './state/userPreferences'

const props = defineProps({
    'user': Object
})

const emit = defineEmits(['savePref'])

const valores = ref({
    'custoImovel': 0,
    'custoVida': 0,
    'tipoCidade': ""
})

function salvarPreferencia(v) {
    const usuario = userPreferences.find(u => u.email === props.user.email)
    if (!usuario) {
        userPreferences.push({
            email: props.user.email,
            preferencias: {
                tipoCidade: v.tipoCidade,
                custoImovel: v.custoImovel,
                custoVida: v.custoVida
            }
        })
    }
    else {
        usuario.preferencias = {
            tipoCidade: v.tipoCidade,
            custoImovel: v.custoImovel,
            custoVida: v.custoVida
        }
    }
    console.log(userPreferences)
    emit('savePref')
}

function verificarVazio() {
    if (valores.value.custoImovel == 0 || valores.value.custoVida == 0 || valores.value.tipoCidade == "") {
        return true
    }
    return false
}

</script>

<template>
    <v-container class="d-flex flex-column align-center">
        <p>Selecione os valores das características em grau de importância de 1 a 5.</p>
        <v-list lines="one">
            <v-list-item>
                <span>Custo do imóvel</span>
                <v-select  
                    id="select-custo-imovel" 
                    v-model="valores.custoImovel"
                    :items="['1','2','3','4','5']">
                </v-select>
            </v-list-item>
            <v-list-item>
                <span>Custo do imóvel</span>
                <v-select 
                    id="select-custo-vida" 
                    v-model="valores.custoVida"
                    :items="['1','2','3','4','5']">
                </v-select>
            </v-list-item>
            <v-list-item>
                <span>Custo do imóvel</span>
                <v-select 
                    id="select-tipo-cidade" 
                    v-model="valores.tipoCidade"
                    :items="['1','2','3','4','5']">
                </v-select>
            </v-list-item>
        </v-list>
        <v-btn :disabled="verificarVazio()" id="salvar" @click="salvarPreferencia(valores)">Salvar</v-btn>
    </v-container>
</template>

<style scoped>
li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
}

li select {
    margin-right: 50%;
}

</style>