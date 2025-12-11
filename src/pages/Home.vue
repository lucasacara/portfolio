<script setup>
import GridProjects from '@/components/grid/GridProjects.vue';
import Header from '@/components/global/Header.vue';
</script>

<template>
    <div class="MainContainer">
        <Header logoColor="white"></Header>
        <GridProjects></GridProjects>
    </div>
</template>

<style scoped>
.MainContainer {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    background-color: var(--blue-500);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-x: hidden;
    overflow-y: auto;

    box-sizing: border-box;
}
</style>
