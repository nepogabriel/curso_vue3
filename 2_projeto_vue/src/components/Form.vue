<template>
  <div>
    <h2>Formulário:</h2>
    <!-- $event - Eventos da função nativa do vue.js 3 (javascript)-->
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <input type="text" v-model="name">
      </div>

      <div>
        <input type="text" v-model="email">
      </div>

      <Submit/>
    </form>
  </div>
</template>

<script>
  import InputText from "@/components/form/InputText";
  import Submit from "@/components/form/Submit";

  export default {
    name: 'Form',
    components: {
      InputText,
      Submit
    },
    data() {
      return {
        name: '',
        email: ''
      }
    },
    methods: {
      enviarFormulario(e) {
        e.preventDefault();

        const name = this.name;
        const email = this.email;

        console.log('Formulário enviado!');
        console.log(`Meu nome é ${name}`);
        console.log(`Meu e-mail é ${email}`);

        // Aqui seria a requisição Ajax para enviar esses dados para a API
      }
    }
  }
</script>

<style>
p {
  margin: 50px;
}
</style>