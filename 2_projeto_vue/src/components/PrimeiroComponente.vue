<!-- Os componentes do Vue.js podem ter somente um elemento root -->
<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ name }}</p>
    <p>Minha profissão é {{ profession }}</p>

    <MultiplosEventos/>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
    <Reutilizacao/>
  </div>
</template>

<script>
  import MultiplosEventos from "@/components/MultiplosEventos";
  import Reutilizacao from "@/components/Reutilizacao";

  export default {
    name: 'PrimeiroComponente', // Nome do componente
    components: {
      MultiplosEventos,
      Reutilizacao
    },
    data() { // Utilizando dados no componente (esses dados só podem ser usados dentro do componente)
      return {
        name: 'Gabriel',
        profession: 'Programador'
      }
    }
  }
</script>