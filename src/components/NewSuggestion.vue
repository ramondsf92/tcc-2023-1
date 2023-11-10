<script setup>
import { ref } from 'vue'
import { users } from './state/user'

const props = defineProps({
    'user': Object
})

const valores = ref({
    'seguranca': 0,
    'emprego': 0,
    'saude': 0,
    'educacao': 0,
    'custoVida': 0
})

function salvarPreferencia(v) {
    const usuario = users.find(u => u.email === props.user.email)
    if (!usuario) {
        users.push({
            email: props.user.email,
            preferencias: [{
                id: 1,
                seguranca: v.seguranca,
                emprego: v.emprego,
                saude: v.saude,
                educacao: v.educacao,
                custoVida: v.custoVida
            }]
        })
    }
    else {
        usuario.preferencias.push({
            id: usuario.preferencias.length + 1,
            seguranca: v.seguranca,
            emprego: v.emprego,
            saude: v.saude,
            educacao: v.educacao,
            custoVida: v.custoVida
        })
    }
    console.log(users)
}

</script>

<template>
    <div>
        <p>Selecione os valores das características em grau de importância. {{ valores }}</p>
        <ul>
            <li>Segurança
                <select id="select-seguranca" v-model="valores.seguranca">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </li>
            <li>Emprego
                <select id="select-emprego" v-model="valores.emprego">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </li>
            <li>Saúde
                <select id="select-saude" v-model="valores.saude">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </li>
            <li>Educação
                <select id="select-educacao" v-model="valores.educacao">
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
        </ul>
        <button id="salvar" @click="salvarPreferencia(valores)">Salvar</button>
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