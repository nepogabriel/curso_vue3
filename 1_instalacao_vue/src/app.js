// Instância
const MyNameApp = {
    // Propriedade que retorna dados para o front-end
    data() {
        return {
            name: '',
            age: 22,
            input_name: '',
        }
    },
    methods: { // Onde fica as funções da aplicação
        submitForm(e) {
            e.preventDefault();

            console.log(this.input_name);

            this.name = this.input_name;
        }
    }
}

// Instanciar o MyNameApp
Vue.createApp(MyNameApp).mount('#app');