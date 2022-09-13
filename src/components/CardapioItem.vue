<script setup>
import { useCartStore } from '../stores/cart';

const props = defineProps({
  produto: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();

function addToCart(){
  cartStore.addToCart(props.produto);
}
</script>

<template>
  <li class="produto">
    <p class="produto-nome">{{ produto.name }}</p>
    <img class="produto-img" src="../assets/img-burger.webp" alt="foto hamburger" />

    <div class="extra-info">
      <p class="produto-preco">R$ {{ produto.price }}</p>

      <p class="produto-avaliacao">
        <span class="material-icons"> star </span>
        {{ produto.rating }}
      </p>
    </div>

    <p class="produto-descricao">
      {{ produto.description }}
    </p>

    <button class="btn" @click="addToCart">Adicionar</button>
  </li>
</template>

<style lang="scss" scoepd>
.produto {
  padding: 15px;
  text-align: center;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);

  &-nome {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  &-img {
    width: 100%;
    max-height: 20rem;
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
    font-size: 14px;
    margin: 15px 0 10px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
