<template>
	<div id="ProjectContainer">
		<Header logoColor="blue"></Header>
		<ButtonPrimary text="Voltar aos projetos" href="/"></ButtonPrimary>
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
	import { useRoute, useRouter } from "vue-router";
	import { getProjectByID, Project } from "@/js/utils.js";
	import ButtonPrimary from "@/components/button/ButtonPrimary.vue";

	// GLOBAL VARIABLES
	var gProject = new Project();

	// MAIN FUNCTION
	main();

	function main() {
		const route = useRoute();
		const router = useRouter();

		gProject = getProjectByID(route.params.id);

		if (gProject.title == "") {
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
