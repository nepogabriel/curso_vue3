<template>
  <div>
    <h2>Formulário:</h2>
    <form action="">
      <InputText/>
      <InputText/>
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
    }
  }
</script>