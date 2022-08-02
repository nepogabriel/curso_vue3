<template>
  <div>
    <p>Componente de Mensagem</p>

    <div>
      <form id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="name">Nome do Cliente</label>
          <!-- v-model - altera o valor do input, select, etc -->
          <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu nome...">
        </div>

        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha a carne:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione a carne:</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
          <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>

        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar Burger">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerFormComponent',
  data() {
    return {
      // Dados que vão vir do servidor
      paes: null,
      carnes: null,
      opcionaisData: null,

      // Dados que vão ser enviados para o servidor
      name: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null
    }
  },
  methods: {
    // async - método assíncrono
    async getIngredientes() { // Irá pegar os dados do backend
      const requisicao = await fetch('http://localhost:3000/ingredientes'); // Se enviar assim é GET por padrão
      const data = await requisicao.json(); // O resultado da requisição irá ficar nessa constante

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisData = data.opcionais;

      console.log(data);
    },
    async createBurger(e) {

      e.preventDefault();

      console.log('Criou o Burger');

      const data = {
        nome: this.name,
        pao: this.pao,
        carne: this.carne,
        opcionais:  Array.from(this.opcionais), // Utilizar Array.from quando o dado for um array
        status: 'Solicitado'
      }

      // transformando em string que tem formato de JSON p/ enviar na requisição p/ API
      const dataJson = JSON.stringify(data);

      const request = await fetch('http://localhost:3000/burgers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: dataJson // Dados que será enviado na requisição
      });

      // Pegando o retorno da requisição p/ API
      const result_request = await request.json();

      console.log(result_request);

      //colocar uma mensagem de sistema
      //limpar mensagem

      // limpar os campos após o envio
      this.name = '';
      this.pao = '';
      this.carne = '';
      this.opcionais = []; // this.opcionais = '' - Assim também funciona
    }
  },
  mounted() { // Quando o componente for montado, o mounted() será executado
    // Executando a requisião para o backend
    this.getIngredientes();
  }
}
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #FCBA03;
}

input, select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 5px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #FCBA03;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
  transition: .5s;
}

</style>