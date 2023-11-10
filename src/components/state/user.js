import { reactive } from 'vue'

export const users = reactive([{
    email: 'teste',
    preferencias: [{
        id: 1,
        seguranca: 0,
        emprego: 0,
        saude: 0,
        educacao: 0,
        custoVida: 0
    }],
},])