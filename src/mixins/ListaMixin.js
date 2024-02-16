export default {
    data: () => ({
        titulo: 'Lista Padrao',
        itens: [],
        item: ''
    }),
    methods: {
        adicionarItem() {
            this.itens.push(this.item)
            this.item = ''
        }
    },
    created() {
        console.log('ListaMixin criada')
    }
}