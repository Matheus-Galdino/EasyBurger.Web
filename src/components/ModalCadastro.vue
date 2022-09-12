<script setup>
import { reactive } from "vue";

const dados = reactive({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
});

function cadastrar(){
    console.log(dados);
}
</script>

<template>
    <form @submit.prevent="cadastrar">
        <label>Nome:</label>
        <input type="text" placeholder="Seu nome..." v-model="dados.nome" required />

        <label>Email:</label>
        <input type="email" placeholder="email@example.com" v-model="dados.email" required />

        <label>Senha:</label>
        <input type="password" placeholder="●●●●●●●●●●●" v-model="dados.senha" required />

        <label>Confirmar senha:</label>
        <input type="password" placeholder="●●●●●●●●●●●" v-model="dados.confirmarSenha" required />

        <router-link to="#">Já tem cadastro? Acessar</router-link>
        <button>Criar conta</button>
    </form>
</template>