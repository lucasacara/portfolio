<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <RouterLink to="/">
            <img src="@/assets/img/logo-animation.gif"></img>
        </RouterLink>
    </header>
</template>

<style scoped>
    header {
        position: relative;
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    header a:hover {
        background-color: transparent;
    }

    header img {
        filter: brightness(0%) invert(100%);

        position: relative;
        width: 100%;
        height: auto;
        max-width: 280px;
    }
</style>
