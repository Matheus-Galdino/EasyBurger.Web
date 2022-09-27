<script setup>
import { RouterView } from "vue-router";

import TheNav from "./components/TheNav.vue";
import ToastsWrapper from "./components/ToastsWrapper.vue";
</script>

<template>
  <TheNav />

  <RouterView />

  <ToastsWrapper />

  <div id="mask"></div>
</template>

<style>
@import "styles/reset.scss";

#mask:not(:empty) {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);

  display: grid;
  place-items: center;
}
</style>
