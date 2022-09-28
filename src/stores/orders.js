import { defineStore } from "pinia";

export const useOrderStore = defineStore("orders", {
  state: () => ({
      orders: [],
      cartProducts: [],
  }),
  getters: {
    productsCount: (state) => state.cartProducts.reduce((prev, current) => prev + current.quantity, 0),
    precoTotal: (state) => state.cartProducts.reduce((prev, current) => prev + current.product.price * current.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const productIndex = this.cartProducts.findIndex((x) => x.product.id == product.id);

      if (productIndex === -1) this.cartProducts.push({ product, quantity: 1 });
      else this.cartProducts[productIndex].quantity++;
    },
    increaseQuantity(productId) {
      const productIndex = this.cartProducts.findIndex((x) => x.product.id == productId);

      this.cartProducts[productIndex].quantity++;
    },
    decreaseQuantity(productId) {
      const productIndex = this.cartProducts.findIndex((x) => x.product.id == productId);

      this.cartProducts[productIndex].quantity--;

      if (this.cartProducts[productIndex].quantity === 0) this.removeFromCart(productId);
    },
    removeFromCart(productId) {
      const productIndex = this.cartProducts.findIndex((x) => x.product.id == productId);

      this.cartProducts.splice(productIndex, 1);
    },    
  },
});
