<script setup>
import Header from '@/components/global/Header.vue';
</script>

<template>
    <div class="MainContainer">
        <Header></Header>
    </div>
</template>

<style scoped>
.MainContainer {
    position: relative;
    width: 100%;
    height: 100%;

    background-color: red;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-x: hidden;
    overflow-y: auto;

    box-sizing: border-box;
}
</style>
