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
  },
  mounted() { // Irá sobrescrever o created()
    setTimeout(() => {
      this.name = 'Nepomuceno';
    }, 2000);
  }
}
</script>