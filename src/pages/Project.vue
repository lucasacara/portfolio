<template>
    <div id="ProjectContainer">
        <Header></Header>
        <h1>{{ gProjTitle }}</h1>
        <h2>{{ gProjSubtitle }}</h2>
        <p>{{ gProjDescription }}</p>
        <p>*Este é um projeto desenvolvido durante a graduação em Design Visual para fins acadêmicos, não tendo
            quaisquer vínculos com as marcas ou clientes citados e exibidos.</p>
    </div>
</template>

<script setup>
// IMPORTS
import Header from '@/components/global/Header.vue';
import projectsJSON from '@/json/projects.json';
import { useRoute, useRouter } from 'vue-router';

// PROPS
const props = defineProps({
    id: {
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

// GLOBAL VARIABLES
var gProjTitle,
    gProjSubtitle,
    gProjDescription = "";

// MAIN FUNCTION
main();

function main() {
    const route = useRoute();
    const router = useRouter();

    let lProject = projectsJSON[route.params.id];

    if (lProject) {
        gProjTitle = lProject.title;
        gProjSubtitle = lProject.subtitle;
        gProjDescription = lProject.description;
    } else {
        router.push("/not-found");
    }
}
</script>

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
