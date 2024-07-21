// Este arquivo cities.js foi criado apenas para fins de testes do frontend, em que o componente CitySuggestion.vue buscará nesse arquivos exemplos de cidades.
// O arquivo deverá ser removido na versão final do projeto

import { reactive } from "vue";

export const cities = reactive([
  {
    nome: "Rio das Ostras",
    qtdHab: 180000,
    regiao: "Região dos Lagos",
    pibPerC: 121799.76,
    emprego: 3,
    turismo: 5,
    seguranca: 3,
    educacao: 3,
    imagens: [
      "https://www.riodasostras.rj.gov.br/wp-content/uploads/2021/01/pra%C3%A7a-3.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/b0/a1/f1/rio-das-ostras.jpg?w=1200",
      "https://www.likeparadise.com.br/wp-content/uploads/2021/10/rio-das-ostras.png",
    ],
  },
  {
    nome: "Macaé",
    qtdHab: 230000,
    regiao: "Norte Fluminense",
    pibPerC: 41234.48,
    emprego: 5,
    turismo: 2,
    seguranca: 2,
    educacao: 3,
    imagens: [
      "https://elquarto.com/blog/wp-content/uploads/2022/04/Macae-RJ.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Lix%C3%A3o_da_Estrutural_%2815672548605%29.jpg",
      "https://i.ytimg.com/vi/hhM3MaTc2LU/hqdefault.jpg",
    ],
  },
]);
