<script setup>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useMainStore } from '../stores/main';

const props = defineProps({
    toast: {
        type: Object,
        required: true
    }
})

const mainStore = useMainStore();
const toastIcon = computed(() => props.toast.type === "success" ? "check_circle" : "cancel");

onMounted(() => {
    setTimeout(() => {
        mainStore.clearToast(props.toast.message);
    }, 3000);
})
</script>

<template>
    <li :class="['toast', toast.type]">
        <span class="material-icons"> {{ toastIcon }} </span>
        <p class="content">{{ toast.message }}</p>
        <button class="btn dismiss outlined" @click="mainStore.clearToast(toast.message)">x</button>
    </li>
</template>

<style lang="scss" scoped>
.toast {
    display: flex;
    column-gap: 2rem;
    align-items: center;
    justify-self: end;

    padding: 1rem;
    border-radius: 2rem;
    background: #fff;
    box-shadow: var(--box-shadow);

    .material-icons {
        color: #fff;
    }

    &.success .material-icons {
        color: #22fa34;
    }

    .content {
        font-size: 1.5rem;
    }

    .dismiss {
        padding: 0;
        color: #B4B4C2;
        font-size: 2rem;
        justify-self: flex-end;
        background: transparent;
    }
}
</style>