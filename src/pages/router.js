import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Project from "@/pages/Project.vue";
import NotFound from "@/pages/NotFound.vue";

import strMatchesRegex, { getProjectByID } from "@/js/utils.js";

// GLOBAL DEFS
const DEFAULT_TITLE = "Lucas Acara";

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/project/:id",
		name: "project",
		component: Project,
	},
	{
		path: "/not-found",
		name: "404",
		component: NotFound,
		meta: { title: "Página não encontrada" },
	},
];

const allowedPathsRegex = [
	/^\/$/, // Apenas "/"
	/^\/project\/[^/]*$/, // Páginas que iniciarem com "/project/" e tiverem algo escrito depois do segundo "/", mas sem permitir novos "/"
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, from) => {
	let lValid = true;

	if (!strMatchesRegex(to.path, allowedPathsRegex)) {
		lValid = false;
	}

	if (!lValid && to.path != "/not-found") {
		return { path: "/not-found", params: {} };
	}
});

router.afterEach(async (to, from) => {
  // Se for a página de um projeto, busca o título do mesmo para acrescentar à aba
	if (router.currentRoute.value.path.includes("/project/")) {
		let lProjTitle = getProjectByID(
			router.currentRoute.value.params.id
		).title;

		if (lProjTitle != "") {
      router.currentRoute.value.meta = { title: lProjTitle }
		}
	}

	let lTitle = to.meta.title
		? `${to.meta.title} | ${DEFAULT_TITLE}`
		: DEFAULT_TITLE;

	document.title = lTitle;
});

export default router;
