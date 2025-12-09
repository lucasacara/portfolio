<script setup>
import projectsJSON from '../../json/projects.json';
import CardProject from '../card/CardProject.vue';
</script>

<template>
    <div class="GridProjects">
        <CardProject v-for="(project, index) in projectsJSON" :title="project.title" :id="index" :key="index"></CardProject>
    </div>
</template>

<style scoped>
.GridProjects {
    position: relative;
    width: 100%;
    max-width: 1440px;
    height: min-content;

    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;

    padding: 8px;
}

@media (min-width: 768px) {
    .GridProjects {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
