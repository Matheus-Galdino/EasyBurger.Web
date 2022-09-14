<script setup>
import { computed } from "vue";

import { useCartStore } from "../stores/cart";
import CarrinhoItem from "../components/CarrinhoItem.vue";

const cartStore = useCartStore();

const hasItems = computed(() => cartStore.productsCount > 0);
</script>

<template>
  <main>
    <section class="products-container">
      <ul class="products-list">
        <carrinho-item v-for="({product, quantity}, index) in cartStore.products" :product="product"
          :quantity="quantity" :key="index" />
      </ul>

      <footer class="total-container" v-show="hasItems">
        <h3> Total </h3>
        <p>
          <strong>R$ {{ cartStore.precoTotal }}</strong>
        </p>

        <button class="efetuar-pagamento">Efetuar pagamento</button>
        <router-link to="/" class="btn cancel">Voltar</router-link>
      </footer>

      <footer class="empty-cart" v-show="!hasItems">
        <img src="../assets/empty-cart.svg" alt="">
        <p>O carrinho está vazio. <br> Tente adicionar algum produto</p>

         <router-link class="btn" to="/">Ver cardápio</router-link>
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

.empty-cart {
  padding: 2rem;
  text-align: center;

  img {
    width: 100%;
    aspect-ratio: 1;
    max-width: 22rem;
  }

  p {
    font-size: 1.5rem;
  }

  .btn {
    margin-top: 1.5rem;
    text-decoration: none;
  }
}
</style>
