<script setup>
import { RouterView } from "vue-router";

import TheNav from "./components/TheNav.vue";
</script>

<template>
  <TheNav />

  <RouterView />
</template>

<style>
@import "styles/reset.scss";
</style>
