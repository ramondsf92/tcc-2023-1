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
    <div>
        <p>Selecione os valores das características em grau de importância de 1 a 5.</p>
        <ul>
            <li>Custo do imóvel
                <select id="select-custo-imovel" v-model="valores.custoImovel">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </li>
            <li>Custo de vida
                <select id="select-custo-vida" v-model="valores.custoVida">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </li>
            <li>Tipo de cidade
                <select id="select-tipo-cidade" v-model="valores.tipoCidade">
                    <option value="pequena">Pequena</option>
                    <option value="media">Média</option>
                    <option value="grande">Grande</option>
                </select>
            </li>
        </ul>
        <button :disabled="verificarVazio()" id="salvar" @click="salvarPreferencia(valores)">Salvar</button>
    </div>
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

#salvar {
    margin-top: 5px;
    margin-left: 45%;
    padding: 10px 15px;
}
</style>