<template>
  <!-- v-bind: e : são a mesma coisa -->
  <img :src="avatar" v-bind:alt="descricao">
  <Reutilizacao/>
</template>

<script>
  import Reutilizacao from "@/components/Reutilizacao";

  export default {
    name: 'Picture',
    components: {
      Reutilizacao
    },
    data() {
      return {
        avatar: '/img/avatar.png', // Sempre que estiver acessando do / significa que está entrando no public
        descricao: 'Gabriel Nepomuceno',
      }
    }
  }
</script>