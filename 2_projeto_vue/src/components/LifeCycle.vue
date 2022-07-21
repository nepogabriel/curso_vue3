<template>
  <div>
    <h1>Meu nome é {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle', // Nome do componente
  data() {
    return {
      name: 'Ainda não sei'
    }
  },
  created() { // Após a criação do componente será executado...
    setTimeout(() => {
      this.name = 'Gabriel';
    }, 1000);

    this.lifeCycle('created executou!');
  },
  mounted() { // Será executado quando o componente é montado por completo (Irá sobrescrever o created())
    setTimeout(() => {
      this.name = 'Nepomuceno';
    }, 2000);

    this.lifeCycle('mounted executou!');
  },
  methods: { // LifeCycle Hooks pode utilizar os métodos e vice-versa
    lifeCycle(texto) {
      console.log(texto);
    }
  }
}
</script>