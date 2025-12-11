<template>
	<div id="ProjectContainer">
		<Header logoColor="blue"></Header>
		<h1>{{ gProject.title }}</h1>
		<h2>{{ gProject.subtitle }}</h2>
		<p>{{ gProject.description }}</p>
		<p v-show="gProject.academyProject">
			*Este é um projeto desenvolvido durante a graduação em Design Visual
			para fins acadêmicos, não tendo quaisquer vínculos com as marcas ou
			clientes citados e exibidos.
		</p>
	</div>
</template>

<script setup>
	// IMPORTS
	import Header from "@/components/global/Header.vue";
	import projectsJSON from "@/json/projects.json";
	import { useRoute, useRouter } from "vue-router";
	import { Project } from "@/js/utils.js";

	// GLOBAL VARIABLES
	var gProject = new Project();

	// MAIN FUNCTION
	main();

	function main() {
		const route = useRoute();
		const router = useRouter();

		let lProjAux = projectsJSON[route.params.id];

		if (lProjAux) {
			gProject.title = lProjAux.title;
			gProject.subtitle = lProjAux.subtitle;
			gProject.description = lProjAux.description;
			gProject.academyProject = lProjAux.academyProject;
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

		background-color: #ffffff;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		overflow-x: hidden;
		overflow-y: auto;

		box-sizing: border-box;
	}
</style>
