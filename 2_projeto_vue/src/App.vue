<template>
  <div>
    <Header/>
    <h1>Olá Mundo!</h1>
    <!-- Utilizando Componente -->
    <PrimeiroComponente/>

    <p>{{ teste }}</p>

    <LifeCycle/>
    <Pessoa/>
  </div>
</template>

<script>
  // Importando Compenente
  import Header from "@/components/HeaderComponent";
  import PrimeiroComponente from "@/components/PrimeiroComponente";
  import LifeCycle from "@/components/LifeCycle";
  import Pessoa from "@/components/Pessoa";

  export default {
    name: 'App', // Nome do componente
    components: { // Listando os componentes que este arquivo está utilizando
      Header,
      PrimeiroComponente,
      LifeCycle,
      Pessoa
    },
    data() {
      return {
        teste: 'Testando Compenente'
      }
    }
  }
</script>

<style>
body {
  background-color: #333;
  color: #fff;
}

a {
  color: #c08aff;
}
</style>