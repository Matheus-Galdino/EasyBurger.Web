<script setup>
import { useCartStore } from '../stores/cart';
import { useMainStore } from '../stores/main';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();
const mainStore = useMainStore();

function addToCart() {
  cartStore.addToCart(props.product);

  mainStore.addToast({
    type: "success",
    message: `${props.product.name} adicionado!`
  })
}
</script>

<template>
  <li class="product">
    <p class="product-nome">{{ product.name }}</p>
    <img class="product-img" :src="product.img" alt="foto lanche" />

    <div class="extra-info">
      <p class="product-preco">R$ {{ product.price.toFixed(2) }}</p>

      <p class="product-avaliacao">
        <span class="material-icons"> star </span>
        {{ product.rating }}
      </p>
    </div>

    <p class="product-descricao">
      {{ product.description }}
    </p>

    <button class="btn" @click="addToCart">Adicionar</button>
  </li>
</template>

<style lang="scss" scoepd>
.product {
  padding: 2rem;
  text-align: center;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);

  &-nome {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  &-img {
    max-width: 23rem;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 2rem;
  }

  .extra-info {
    display: flex;
    column-gap: 40px;
    align-items: center;
    justify-content: center;

    margin: 1rem 0;
    font-size: 1.8rem;
  }

  &-preco {
    font-size: 1.2em;
    font-weight: bold;
  }

  &-avaliacao {
    display: flex;
    column-gap: 5px;
    align-items: flex-end;

    .material-icons {
      color: #F5E341;
      font-size: 2.7rem;
    }
  }

  &-descricao {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .btn {
    margin-top: 1rem;
    padding-inline: 3rem;
  }
}
</style>
