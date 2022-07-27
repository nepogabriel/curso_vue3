<template>
  <div id="main-banner">
    <h1 class="page-title">Make Your Burger</h1>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent'
}
</script>

<style scoped>
#main-banner {
  /*background-image: url('/img/burger.jpg');*/
  background-image: url('../../public/img/burger.jpg');
  background-position: 0 -250px; /*Desloca o background no eixo Y*/
  background-size: cove; /*Irá deixar o máximo da imagem aparecendo*!*/
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#main-banner .page-title {
  color: #FFF;
  text-align: center;
  font-size: 60px;
  background-color: #222;
  padding: 20px 40px;
}
</style>