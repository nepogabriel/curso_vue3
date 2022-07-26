<template>
  <div>
    <h2>Essa é a descrição da pessoa {{ name }}</h2>

    <!-- Enviando o e-mail atráves de props (vue.js 3) -->
    <Info :mail="mail" :esta_trabalhando="true"/>
    <Form/>
  </div>
</template>

<script>
import Info from "@/components/Info";
import Form from "@/components/Form";

export default {
  name: 'Pessoa', // Nome do componente
  components: {
    Info,
    Form
  },
  data() {
    return {
      name: 'Gabriel',
      mail: 'nepo@email.com'
    }
  }
}
</script>