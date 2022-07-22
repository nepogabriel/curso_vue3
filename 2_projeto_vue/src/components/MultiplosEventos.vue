<template>
  <div>
    <!-- É recomendado que os parâmetros devem ser dados dinâmicos (variável, array, objetos) -->
    <button @click="primeiro('Primeiro evento', $event), segundo(txt, $event), terceiro()">
      Ativar múltiplos eventos
    </button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: 'MultiplosEventos',
  data() {
    return {
      multiplos_eventos: '',
      txt: 'Segundo evento'
    }
  },
  methods: {
    primeiro(text, e) {
      this.multiplos_eventos = `${text} disparado!`;
    },
    segundo(text, e) {
      setTimeout(() => this.multiplos_eventos = `${text} disparado!`, 500);
    },
    terceiro() {
      setTimeout(() => this.multiplos_eventos = '', 1500);
    }
  }
}
</script>

<style scoped>
div {
  margin: 100px;
}
</style>