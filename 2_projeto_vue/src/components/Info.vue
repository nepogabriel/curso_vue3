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

    <p>Mande um e-mail para: <span v-show="mostrar_email"> {{ email }} </span></p>

    <p>Para acessar meu portfolio basta <a v-bind:href="link_portfolio" target="_blank">clicar aqui.</a></p>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    data() {
      return {
        /*
        * Utilizado v-show o elemento é carregado na página e continua lá, porém com o display: none.
        * Já no caso do "v-if" o elemento não é nem carregado na página.
        */
        esta_trabalhando: true, // Usando diretiva v-if
        mostrar_email: true, // Usando diretiva v-show (Comportamento do if sem o else)
        email: 'gabriel@email.com',
        link_portfolio: 'https://github.com/nepogabriel/'
      }
    }
  }
</script>