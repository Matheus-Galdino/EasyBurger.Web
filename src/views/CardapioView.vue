<script setup>
import { reactive, computed } from "vue";
import { useProductStore } from "../stores/product";

import CardapioItem from "../components/CardapioItem.vue";

const state = reactive({ searchText: "" });
const productStore = useProductStore();

const filteredProducts = computed(() => {
  if (state.searchText === "")
    return productStore.products;

  return productStore.products.filter(x => x.name.toLowerCase().includes(state.searchText));
})
</script>

<template>
  <main>
    <section class="main__header">
      <input type="search" placeholder="Pesquise o nome de um produto" v-model="state.searchText" />

      <select>
        <option value="1" selected>Ordenar por nome</option>
        <option value="2">Ordenar por preço</option>
        <option value="3">Ordenar por melhor avaliados</option>
        <option value="4">Ordem por mais pedidos</option>
      </select>
    </section>

    <ul class="lista-produtos">
      <CardapioItem v-for="produto in filteredProducts" :key="produto.id" :product="produto" />
    </ul>
  </main>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

main {
  padding: 0 var(--default-padding) 4rem;
}

.main__header {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
  justify-content: space-between;

  margin-bottom: 3rem;

  input {
    padding: 1.8rem;
    font-size: 1.4rem;
    width: max(500px, 100%);

    border: none;
    flex-grow: 1;
    border-radius: 15px;
    box-shadow: var(--box-shadow);
  }

  select {
    border: none;
    padding: 1rem;
    font-size: 1.4rem;
    border-radius: 1rem;
    width: max(500px, 100%);
    box-shadow: var(--box-shadow);
  }
}

.lista-produtos {
  display: grid;
  row-gap: 3rem;
  column-gap: 15px;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));

  list-style: none;
}
</style>
