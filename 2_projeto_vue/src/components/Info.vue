<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades.</p>

    <p>Utilizo as seguintes tecnologias:</p>

    <ul>
      <li>Laravel 8</li>
      <li>Vue.js 3</li>
      <li>Css</li>
      <li>Ionic</li>
    </ul>

    <hr/>

    <!-- Utilizando evento de click -->
    <button @click="showBirthDate('testando parametro')">{{ textoBotao }}</button>
    <p v-show="data_nascimento">Data de Nascimento: 01/07/1999</p>

    <hr/>

    <p>Mande um e-mail para: <span v-show="mostrar_email"> {{ email }} </span></p>

    <p>Para acessar meu portfolio basta <a v-bind:href="link_portfolio" target="_blank">clicar aqui.</a></p>

    <Picture/>
  </div>
</template>

<script>
  import Picture from "@/components/Picture";

  export default {
    name: 'Info',
    components: {Picture},
    compenents: {
      Picture
    },
    data() {
      return {
        /*
        * Utilizado v-show o elemento é carregado na página e continua lá, porém com o display: none.
        * Já no caso do "v-if" o elemento não é nem carregado na página.
        */
        esta_trabalhando: true, // Usando diretiva v-if
        mostrar_email: true, // Usando diretiva v-show (Comportamento do if sem o else)
        email: 'gabriel@email.com',
        link_portfolio: 'https://github.com/nepogabriel/',
        data_nascimento: false,
        textoBotao: 'Mostrar Data de Nascimento'
      }
    },
    methods: { // É possível acessar as informações do data() dentro do methods
      // Utilizando evento de click
      showBirthDate(testeParametro) {
        console.log('01/07/1999');
        console.log(testeParametro);

        this.data_nascimento = !this.data_nascimento; // Vai inverter o valor boleano (true/false)

        if (!this.data_nascimento) {
          this.textoBotao = 'Mostrar Data de Nascimento';
        } else {
          this.textoBotao = 'Ocultar Data de Nascimento';
        }
      }
    }
  }
</script>