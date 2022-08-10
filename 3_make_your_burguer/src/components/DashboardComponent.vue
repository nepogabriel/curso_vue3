<template>
  <div id="burger-table">
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>

      <div id="burger-table-rows">
        <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
          <div class="order-number">{{ burger.id }}</div>
          <div>{{ burger.nome }}</div>
          <div>{{ burger.pao }}</div>
          <div>{{ burger.carne }}</div>
          <div>
            <ul>
              <!-- Precisa do Index porque esse loop não tem ID próprio -->
              <li v-for="(opcional, index) in burger.opcionais" :key="index">
                {{ opcional }}
              </li>
            </ul>
          </div>
          <div>
            <select name="status" class="status">
              <option value="">Selecione</option>
              <!-- v-bind:selected está fazendo uma condição, irá selecionar o status do pedido,
              onde o status do hamburger for igual algum tipo(status) que está no loop -->
              <option v-for="sts in status" :key="sts.id" value="sts.tipo" v-bind:selected="burger.status == sts.tipo">
                {{ sts.tipo }}
              </option>
            </select>

            <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent',
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: []
    }
  },
  methods: {
    // Função assíncrona quando o JS executa a função para dps executar o restante
    async getPedidos() {
      const request = await fetch('http://localhost:3000/burgers');

      this.burgers = await request.json();

      // resgatar os status
      this.getStatus();
    },
    // Pegando os status do pedido
    async getStatus() {
      const request = await fetch('http://localhost:3000/status');

      this.status = await request.json();
    },
    // Deletar um pedido(burger)
    async deleteBurger(id) {
      const request = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: 'DELETE'
      });

      // mensagem de pedido deletado

      /* Carregando novamente lista de pedidos atualizada.
      (Poderia ser uma opção retirar o pedido(burger) da lista em burgers que está no data(),
      desta forma economizaria recurso/custo evitando consulta para API) */
      this.getPedidos();
    }
  },
  mounted() {
    this.getPedidos();
  }
}
</script>

<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#burger-table-heading div,
.burger-table-row div {
  width: 19%;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #CCC;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #FCBA03;
  font-weight: bold;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
}

.delete-btn:hover {
  transition: .5s;
  background-color: transparent;
  color: #222;
}
</style>