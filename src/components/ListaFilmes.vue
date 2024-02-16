<template>
    <div>
        <h3>{{ titulo }}</h3>
        <input type=text placeholder="Nome do filme" v-model="item">
        <button type="button" @click="adicionarItem">Adicionar</button>
        <br>
        <ul>
            <li v-for="(item, index) in itens" :key="index">{{  item }}</li>
        </ul>
        <button type="button" @click="removerItem">Remover item</button>
    </div>
</template>

<script>
import RemoverItemListaMixin from '@/mixins/RemoverItemListaMixin'
import ListaMixin from '@/mixins/ListaMixin'
export default {
    name: 'ListaFilmes',
    data: () => ({
        titulo: 'Lista Filmes'
    }),
    mixins: [ListaMixin, RemoverItemListaMixin],
    created() {
        console.log('Lista filmes criado')
    }
}
</script>