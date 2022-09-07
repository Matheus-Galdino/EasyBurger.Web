<script setup>
import IconCart from "./icons/IconCart.vue";
</script>

<template>
  <header>
    <nav>
      <h1>EasyBurger</h1>
      <div class="cart-container">
        <IconCart />
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3rem;
  padding: 20px var(--default-padding);
  border-bottom: 1px solid lightgray;
}

.cart-container {
  display: grid;
  place-content: center;

  width: 4rem;
  height: 4rem;
  padding: 2px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid gray;
}
</style>
