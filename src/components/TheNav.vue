<script setup>
import { RouterLink } from "vue-router";

import { useOrderStore } from "../stores/orders";

const orderStore = useOrderStore();
</script>

<template>
  <header>
    <nav>
      <router-link to="/">EasyBurger</router-link>

      <router-link to="/carrinho" class="cart-container material-icons" :data-count="orderStore.productsCount">
        shopping_cart
      </router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3rem;
  padding: 1.5rem var(--default-padding);
  border-bottom: 1px solid lightgray;

  a {
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }
}

.cart-container {
  display: grid;
  place-content: center;

  position: relative;

  width: 3.5rem;
  height: 3.5rem;
  padding: 2px;
  color: #000;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 50%;
  text-decoration: none;
  border: 1px solid gray;

  &::before {
    content: attr(data-count);
    top: 0;
    right: 0;
    position: absolute;

    padding: 0.5rem;

    color: #fff;
    font-size: 1.2rem;
    pointer-events: none;
    background: #f06449;
    border-radius: 1.3rem;
    transform: translate(30%, -50%);

    font-family: "Montserrat", sans-serif;
  }
}
</style>
