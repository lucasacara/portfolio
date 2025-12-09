<script setup>
import { ref, computed } from 'vue';
import Header from '@/components/global/Header.vue';
import projectsJSON from '../json/projects.json';

const props = defineProps({
    idProject: {
        type: String,
        required: true,
    },
})

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

</script>

<template>
    <div id="ProjectContainer">
        <Header></Header>
        <h1>{{projectsJSON[idProject].title}}</h1>
        <h2>{{projectsJSON[idProject].subtitle}}</h2>
        <p>{{projectsJSON[idProject].description}}</p>
        <p>*Este é um projeto desenvolvido durante a graduação em Design Visual para fins acadêmicos, não tendo quaisquer vínculos com as marcas ou clientes citados e exibidos.</p>
    </div>
</template>

<style scoped>
#ProjectContainer {
    position: relative;
    width: 100%;
    height: 100%;

    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    overflow-x: hidden;
    overflow-y: auto;

    box-sizing: border-box;
}
</style>
