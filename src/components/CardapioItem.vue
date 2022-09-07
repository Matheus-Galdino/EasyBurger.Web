<script setup>
import IconStar from "./icons/IconStar.vue";

defineProps({
  produto: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li class="produto">
    <p class="produto-nome">{{ produto.nome }}</p>
    <img class="produto-img" src="../assets/img-burger.webp" alt="hamburger" />

    <div class="extra-info">
      <p class="produto-preco">R$ {{ produto.preco }}</p>

      <p class="produto-avaliacao">
        <IconStar />
        {{ produto.avaliacao }}
      </p>
    </div>

    <p class="produto-descricao">
      {{ produto.descricao }}
    </p>

    <button class="btn">Adicionar</button>
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
    max-height: 200px;
    object-fit: cover;
    border-radius: 20px;
  }

  .extra-info {
    display: flex;
    column-gap: 40px;
    align-items: center;
    justify-content: center;

    margin: 10px 0;
    font-size: 18px;
  }

  &-preco {
    font-size: 1.2em;
    font-weight: bold;
  }

  &-avaliacao {
    display: flex;
    column-gap: 5px;
    align-items: flex-end;
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
