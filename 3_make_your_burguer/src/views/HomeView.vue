<template>
  <BannerComponent/>
  <div class="main-container">
    <h1 class="page-title">Monte seu burger:</h1>
    <BurgerFormComponent/>
  </div>
</template>

<script>
import BannerComponent from "@/components/BannerComponent";
import BurgerFormComponent from "@/components/BurgerFormComponent";

export default {
  name: 'HomeView',
  components: {
    BannerComponent,
    BurgerFormComponent
  }
}
</script>
