<script setup>
import { useMainStore } from '../stores/main';

import Toast from './Toast.vue';

const mainStore = useMainStore();
</script>

<template>
    <transition-group name="toasts" tag="ul" class="toast-wrapper">
        <Toast v-for="(toast, index) in mainStore.toasts" :toast="toast" :key="index" />
    </transition-group>
</template>

<style lang="scss" scoped>
.toast-wrapper {
    position: fixed;
    right: 0.5rem;
    bottom: 2rem;

    display: grid;
    row-gap: 1rem;
}

.toasts-move,
.toasts-enter-active,
.toasts-leave-active {
  transition: all 0.4s ease;
}

.toasts-enter-from,
.toasts-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.toasts-leave-active {
  position: absolute;
}
</style>