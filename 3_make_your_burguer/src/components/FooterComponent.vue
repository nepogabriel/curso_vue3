<template>
  <footer id="footer">
    <p>Make Your Burger &copy; 2022</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: #222;
  color: #FFF;
  font-weight: bold;
  border-top: 4px solid #111;
  bottom: 0;
}
</style>