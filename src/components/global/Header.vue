<script setup>
</script>

<template>
    <header>
        <a href="#/">
            <img src="@/assets/img/logo-animation.gif"></img>
        </a>
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
