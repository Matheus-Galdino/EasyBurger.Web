<script setup>
import { computed, reactive } from "vue";
import CarrinhoItem from "../components/CarrinhoItem.vue";

const produtos = reactive([
  {
    nome: "Hard burger",
    preco: 50,
    quantidade: 2,
  },
  {
    nome: "Insane burger",
    preco: 100,
    quantidade: 1,
  },
  {
    nome: "Easy burger",
    preco: 25.67,
    quantidade: 2,
  },
]);

const precoTotal = computed(() => {
  const sum = produtos.reduce((prev, current) => prev + current.preco * current.quantidade, 0);

  return sum;
})
</script>

<template>
  <main>
    <section class="products-container">
      <ul class="products-list">
        <carrinho-item v-for="(produto, index) in produtos" :produto="produto" :key="index" />
      </ul>

      <footer class="total-container">
        <h3> Total </h3>
        <p>
          <strong>R$ {{ precoTotal }}</strong>
        </p>

        <button class="efetuar-pagamento">Efetuar pagamento</button>
        <router-link to="/" class="btn cancel">Voltar</router-link>
      </footer>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 10rem;
  padding-inline: var(--default-padding);
}

.products-container {
  border-radius: 1.5rem;
  width: min(100%, 600px);
  box-shadow: var(--box-shadow);
}

.products-list {
  list-style: none;
}

.total-container {
  font-size: 1.5rem;
  text-align: center;
  padding-block: 1.5rem;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }

  p {
    color: #f2994a;
    font-size: 2.5rem;
  }

  .efetuar-pagamento,
  .cancel {
    display: block;
    margin-top: 10px;
    margin-inline: auto;
  }

  .cancel {
    width: min-content;
    background: #f06449;
    text-decoration: none;
  }
}
</style>
