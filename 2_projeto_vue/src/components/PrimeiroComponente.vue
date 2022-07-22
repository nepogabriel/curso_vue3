<!-- Os componentes do Vue.js podem ter somente um elemento root -->
<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ name }}</p>
    <p>Minha profissão é {{ profession }}</p>

    <MultiplosEventos/>
  </div>
</template>

<script>
  import MultiplosEventos from "@/components/MultiplosEventos";

  export default {
    name: 'PrimeiroComponente', // Nome do componente
    components: {
      MultiplosEventos
    },
    data() { // Utilizando dados no componente (esses dados só podem ser usados dentro do componente)
      return {
        name: 'Gabriel',
        profession: 'Programador'
      }
    }
  }
</script>