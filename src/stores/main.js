import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    toasts: [],
  }),
  actions: {
    addToast(toast) {
      this.toasts.push(toast);
      console.table(this.toasts);
    },
    clearToast(message) {
      const index = this.toasts.findIndex((x) => x.message === message);
      this.toasts.splice(index, 1);
    },
  },
});
