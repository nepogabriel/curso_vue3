<template>
  <!-- v-bind: e : são a mesma coisa -->
  <img :src="avatar" v-bind:alt="descricao">
</template>

<script>
  export default {
    name: 'Picture',
    data() {
      return {
        avatar: '/img/avatar.png', // Sempre que estiver acessando do / significa que está entrando no public
        descricao: 'Gabriel Nepomuceno',
      }
    }
  }
</script>