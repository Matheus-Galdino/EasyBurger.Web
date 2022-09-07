<script setup>
import { reactive } from "vue";
import CardapioItem from "../components/CardapioItem.vue";

const produtos = reactive([
  {
    id: 1,
    nome: "Galaxy",
    preco: 33.6,
    avaliacao: 4.76,
    descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquam
                    laboriosam repudiandae doloremque est dolores exercitationem laborum vel accusamus. Quae quibusdam,
                    voluptate cumque enim maxime pariatur nemo fugiat unde harum!`,
  },
  {
    id: 2,
    nome: "Galaxy",
    preco: 33.6,
    avaliacao: 4.76,
    descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquam
                    laboriosam repudiandae doloremque est dolores exercitationem laborum vel accusamus. Quae quibusdam,
                    voluptate cumque enim maxime pariatur nemo fugiat unde harum!`,
  },
  {
    id: 3,
    nome: "Galaxy",
    preco: 33.6,
    avaliacao: 4.76,
    descricao: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquam
                    laboriosam repudiandae doloremque est dolores exercitationem laborum vel accusamus. Quae quibusdam,
                    voluptate cumque enim maxime pariatur nemo fugiat unde harum!`,
  },
]);
</script>

<template>
  <main>
    <section class="main__header">
      <input type="text" placeholder="Pesquise o nome de um produto" />

      <select>
        <option value="1" selected>Ordenar por nome</option>
        <option value="2">Ordenar por preço</option>
        <option value="4">Ordem por mais pedidos</option>
        <option value="3">Ordenar por melhor avaliados</option>
      </select>
    </section>

    <ul class="lista-produtos">
      <CardapioItem
        v-for="produto in produtos"
        :key="produto.id"
        :produto="produto"
      />
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
    font-size: 1.4rem;
    padding: 2rem 2.5rem;
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
  row-gap: 30px;
  column-gap: 15px;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  height: 100%;
  list-style: none;
}
</style>
