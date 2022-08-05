<template>
  <div class="main-container">
    <h1 class="page-title">Gerenciar Pedidos</h1>
    <DashboardComponent/>
  </div>
</template>

<script>
import DashboardComponent from "@/components/DashboardComponent";

export default {
  name: 'PedidosView',
  components: {
    DashboardComponent
  }
}
</script>
