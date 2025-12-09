<script setup>
import { ref, computed } from 'vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import Project from './pages/Project.vue';

var gSelectedProjectID = ""

const routes = {
    '/': Home,
    '/projects': Project
}

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;

    if (currentPath.value) {
        let lPath = currentPath.value.slice(1) || '#';
        if (lPath.includes("/projects/")) {
            let aPathSplit = lPath.split("/");
            gSelectedProjectID = aPathSplit[aPathSplit.length - 1];
        } else {
            gSelectedProjectID = "";
        }
    }
})

const currentView = computed(() => {
    let lPath = currentPath.value.slice(1) || '#'
    if (lPath.includes("/projects/")) {
        lPath = "/projects"
    }
    return routes[lPath] || NotFound
})
</script>

<template>
    <component :is="currentView" :idProject="gSelectedProjectID" />
</template>

<style scoped></style>
