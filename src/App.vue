<script setup>
import { RouterView } from "vue-router";

import TheNav from "./components/TheNav.vue";
import ToastsWrapper from "./components/ToastsWrapper.vue";
</script>

<template>
  <TheNav />

  <RouterView />

  <ToastsWrapper />
</template>

<style>
@import "styles/reset.scss";
</style>
