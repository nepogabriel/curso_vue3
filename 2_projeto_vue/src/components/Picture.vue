<template>
  <!-- v-bind: e : são a mesma coisa -->
  <img :src="avatar" v-bind:alt="descricao">

  <!-- Utilizando $emit do vue.js 3 (Perece que não precisar utilizar o mesmo nome do $emit que está no componente filho -->
  <MudarImagem @mudar-imagem="trocarImagem"/>

  <!--<Reutilizacao/>-->
</template>

<script>
  //import Reutilizacao from "@/components/Reutilizacao";
  import MudarImagem from "@/components/MudarImagem";

  export default {
    name: 'Picture',
    components: {
      //Reutilizacao
      MudarImagem
    },
    data() {
      return {
        avatar: '/img/avatar.png', // Sempre que estiver acessando do / significa que está entrando no public
        descricao: 'Gabriel Nepomuceno',
      }
    },
    methods: {
      trocarImagem() {
        this.avatar = '/img/avatar2.png'
      }
    }
  }
</script>