<template>
  <div>
    <h2>Essa é a descrição da pessoa {{ name }}</h2>
    <Info/>
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
      name: 'Gabriel'
    }
  }
}
</script>