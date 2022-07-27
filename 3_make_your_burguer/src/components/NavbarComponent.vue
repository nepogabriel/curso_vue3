<template>
  <nav id="navbar">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['logo', 'alt']
}
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #222;
  border-bottom: #111;
  padding: 15px 50px;
}

#navbar a {
  color: #FCBA03;
  text-decoration: none;
  margin: 12px;
}

#navbar a:hover {
  transition: .5s;
  color: #FFF;
}

#navbar #logo-url {
  margin: auto;
  margin-left: 0;
}

#logo {
  width: 40px;
  height: auto;
}
</style>