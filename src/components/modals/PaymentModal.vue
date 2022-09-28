<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["payment-successful", "payment-cashier", "close"])

function simulateExternalPayment() {
    alert("Pagamento efetuado!!!");
    emit("payment-successful");
    emit("close");
}
</script>

<template>
    <section class="payment-container">
        <button class="option" @click="simulateExternalPayment">
            <span class="material-icons"> account_balance </span>
            PIX
        </button>
        <button class="option" @click="simulateExternalPayment">
            <span class="material-icons"> credit_card </span>
            Cartão
        </button>
        <button class="option cashier" @click="$emit('payment-cashier')">
            <span class="material-icons"> account_balance_wallet </span>
            Pagar no caixa
        </button>
        <button class="option close" @click="$emit('close')">
            <span class="material-icons"> close </span>
            Voltar
        </button>
    </section>
</template>

<style lang="scss" scoped>
.payment-container {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 1fr;

    .option {
        padding: 0;
        width: 12rem;
        padding: 1rem;
        aspect-ratio: 1;
        font-size: 1.6rem;
        border-radius: 50%;
        text-align: center;

        &.cashier {
            justify-self: center;
            background: #388659;
        }

        &.close {
            font-size: 2rem;
            color: #f06449;
            background: #fff;
        }

        .material-icons {
            display: block;
            margin-bottom: 0.3rem;
        }
    }
}
</style>