<script setup>
import { reactive } from 'vue';

    const isOpen = reactive(true);

    function toggleModal() {
        isOpen = !isOpen;
    }
</script>

<template>
    <main>
        <form>
            <button type="button" class="close" @click="toggleModal">X</button>

            <legend>Entre para continuar</legend>

            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="email@example.com" required>

            <label for="senha">Senha</label>
            <input type="password" id="senha" placeholder="●●●●●●●●●●●" required>

            <router-link to="#">Esqueceu a senha?</router-link>
            <button type="submit">Login</button>
        </form>
    </main>
</template>

<style lang="scss" scoped>
$blue: #0B3954;
$light-blue: #1F92EE;

main {
    height: 100vh;
    display: grid;
    align-items: center;
    padding-inline: 7vw;
}

form {
    text-align: center;
    position: relative;
    border-radius: 1.2rem;
    padding: 5rem 1.5rem;
    box-shadow: var(--box-shadow);

    .close {
        position: absolute;
        top: 0.2rem;
        right: 0.2rem;
        background: none;
        color: #b2b2b2;
        font-size: 2rem;
    }

    legend {
        color: $blue;
        font-weight: 600;
        font-size: 2rem;
        
        margin-bottom: 3rem;
    }

    label {
        display: block;
        font-size: 1.4rem;
        text-align: start;
        color: $light-blue;
        margin-bottom: 0.4em;
    }

    input {
        width: 100%;
        padding: 1.5rem;
        margin-bottom: 2rem;
        border: 1px solid #e9e7e7;

        transition: border-bottom 0.1s ease-in;

        &:focus {
            border-bottom: 3px solid $light-blue;
        }
    }

    a {
        font-weight: 600;
        font-size: 1.3rem;
        color: $light-blue;
        text-decoration: none;
    }

    button[type="submit"] {
        width: 100%;
        display: block;
        border-radius: 0;
        margin-top: 2rem;
        font-size: 1.6rem;
        padding-block: 1.5rem;

        font-weight: normal;
    }
}
</style>