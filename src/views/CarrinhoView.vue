<script setup>
import { computed, ref } from "vue";

import { useOrderStore } from "../stores/orders";
import CarrinhoItem from "../components/CarrinhoItem.vue";
import PaymentModal from "../components/PaymentModal.vue";

const isPaying = ref(false);
const orderStore = useOrderStore();

const hasItems = computed(() => orderStore.productsCount > 0);
</script>

<template>
  <main>
    <section class="products-container">
      <ul class="products-list">
        <carrinho-item v-for="({product, quantity}, index) in orderStore.cartProducts" :product="product"
          :quantity="quantity" :key="index" />
      </ul>

      <footer class="total-container" v-show="hasItems">
        <h3> Total </h3>
        <p>
          <strong>R$ {{ orderStore.precoTotal.toFixed(2) }}</strong>
        </p>

        <button class="efetuar-pagamento" @click="isPaying = !isPaying">
          Efetuar pagamento
        </button>
        <router-link to="/" class="btn cancel">Voltar</router-link>
      </footer>

      <footer class="empty-cart" v-show="!hasItems">
        <img src="../assets/empty-cart.svg" alt="">
        <p>O carrinho está vazio. <br> Tente adicionar algum produto</p>

        <router-link class="btn" to="/">Ver cardápio</router-link>
      </footer>
    </section>

    <teleport to="#mask" :disabled="!isPaying">
      <payment-modal v-show="isPaying" @cancel="isPaying = !isPaying" />
    </teleport>

  </main>
</template>

<style lang="scss" scoped>
main {
  margin-top: 10rem;
  padding-inline: var(--default-padding);
}

.products-container {
  padding: 1rem;
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
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;

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
