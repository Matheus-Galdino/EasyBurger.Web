<script setup>
import { useOrderStore } from '../stores/orders';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true
  }
});

const orderStore = useOrderStore();
</script>

<template>
  <li class="products-item">
    <img :src="product.img" alt="hamburger" />

    <p class="nome">{{ product.name }}</p>
    <p class="price">R$ {{ product.price.toFixed(2) }}</p>

    <div class="input-container">
      <button class="material-icons" @click="orderStore.decreaseQuantity(product.id)">remove</button>
      <input type="text" :value="quantity" readonly />
      <button class="material-icons" @click="orderStore.increaseQuantity(product.id)">add</button>
    </div>

    <button class="material-icons remover" @click="orderStore.removeFromCart(product.id)">delete_outline</button>

  </li>
</template>

<style lang="scss" scoped>
$img-width: 10rem;

.products-item {
  display: grid;
  column-gap: 1rem;
  align-items: center;
  justify-content: space-between;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: $img-width auto auto;

  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid lightgray;

  img {
    max-width: $img-width;
    aspect-ratio: 1;
    object-fit: cover;

    grid-column: 1;
    grid-row: 1 / 3;
    border-radius: 1.2rem;
  }

  .nome,
  .price {
    grid-column: 2;
    justify-self: center;

    font-size: 2rem;
    font-weight: bold;
  }

  .nome {
    grid-row: 1 / 2;
    align-self: end;

    font-weight: 600;
    color: #4e5150;
    font-size: 1.5rem;

  }

  .price {
    grid-row: 2 / 3;
    align-self: start;

    font-size: 2rem;
    margin-top: 0.3em;
    color: #f2994a;
  }
}

.input-container {
  display: flex;
  column-gap: 1rem;

  align-self: end;
  align-items: center;

  grid-row: 1;
  grid-column: 3;

  padding: 0.5rem;
  border-radius: 1.5rem;
  border: 1px solid #f2994a;

  button {
    border: none;
    font-size: 1.7rem;
    font-weight: bold;
    border-radius: 1rem;
    padding: 0.5rem 1rem;

    display: grid;
    cursor: pointer;
    place-content: center;
  }

  input {
    width: 2rem;
    border: none;
    background: none;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
  }
}

.remover {
  grid-row: 2;
  grid-column: 3;
  place-self: start center;

  margin-top: 1rem;
  font-size: 2.2rem;
  padding: 0.7rem 3rem;
  background: #f06449;
}
</style>
