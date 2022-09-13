import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "user",
  state: () => ({
    isLoggedIn: false
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    
  },
});
