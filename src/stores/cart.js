import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    products: [],
  }),
  getters: {
    productsCount: (state) => state.products.length,
    precoTotal: (state) => state.products.reduce((prev, current) => prev + current.product.price * current.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const productIndex = this.products.findIndex((x) => x.product.id == product.id);

      if (productIndex === -1) this.products.push({ product, quantity: 1 });
      else this.products[productIndex].quantity++;
    },
    increaseQuantity(productId) {
      const productIndex = this.products.findIndex((x) => x.product.id == productId);

      this.products[productIndex].quantity++;
    },
    decreaseQuantity(productId) {
      const productIndex = this.products.findIndex((x) => x.product.id == productId);

      if (this.products[productIndex].quantity-- == 0) this.products.splice(productIndex, 1);
    },
  },
});
