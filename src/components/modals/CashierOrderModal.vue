<script setup>
import { defineProps } from "vue";

defineProps({
    orderCode: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="order-container">
        <button class="outlined" @click="$emit('close')">X</button>
        <p>Apresente este código ao caixa</p>
        <h1>{{ orderCode }}</h1>
    </div>
</template>

<style lang="scss" scoped>
.order-container {
    min-width: 70%;
    text-align: center;
    background: #fff;
    border-radius: 1.2rem;
    padding: 4rem 3rem 3rem;

    position: relative;

    .outlined {
        position: absolute;
        top: 1rem;
        right: 1rem;

        padding: 0;
        color: gray;
        font-size: 1.9rem;
        background: transparent;
    }

    p {
        opacity: 0.8;
        font-size: 1.8rem;
    }
    
    h1 {
        font-size: 5rem;
        margin-top: 2rem;
    }
}
</style>