import { createRouter, createWebHistory } from "vue-router";

import CardapioView from "../views/CardapioView.vue";
import CarrinhoView from "../views/CarrinhoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "cardapio",
      component: CardapioView,
    },
    {
      path: "/carrinho",
      name: "carrinho",
      component: CarrinhoView,
    },
  ],
});

export default router;
