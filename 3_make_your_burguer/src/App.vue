<template>
  <NavbarComponent :logo="logo" :alt="app_name"/>
  <router-view/>
  <FooterComponent/>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      logo: '/img/logo.png',
      app_name: 'Make Your Burger'
    }
  }
}
</script>

<style>
* {
  /*font-family: Helvetica;*/
  padding: 0;
  margin: 0;
  box-sizing: border-box; /*Para os inputs não passar do tamanho da div pai*/
}

.main-container {
  margin: 50px;
  min-height: 200px;
}

.page-title {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
