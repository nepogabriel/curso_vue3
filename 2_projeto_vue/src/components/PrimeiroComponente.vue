<!-- Os componentes do Vue.js podem ter somente um elemento root -->
<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ name }}</p>
    <p>Minha profissão é {{ profession }}</p>
  </div>
</template>

<script>
  export default {
    name: 'PrimeiroComponente', // Nome do componente
    data() { // Utilizando dados no componente (esses dados só podem ser usados dentro do componente)
      return {
        name: 'Gabriel',
        profession: 'Programador'
      }
    }
  }
</script>