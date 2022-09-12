<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <h1>EasyBurger</h1>

      <router-link to="/carrinho" class="cart-container material-icons">
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
  padding: 1rem var(--default-padding);
  border-bottom: 1px solid lightgray;
}

.cart-container {
  display: grid;
  place-content: center;

  width: 3rem;
  height: 3rem;
  padding: 2px;
  color: #000;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 50%;
  text-decoration: none;
  border: 1px solid gray;
}
</style>
