import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue';
import Project from '@/pages/Project.vue';
import NotFound from '@/pages/NotFound.vue';

import strMatchesRegex from "@/js/utils.js";

const routes = [
  { path: '/', component: Home },
  { path: '/project/:id', component: Project },
  { path: '/not-found', component: NotFound },
]

const allowedPathsRegex = [
  /^\/$/, // Apenas "/"
  /^\/project\/[a-zA-Z]/, // Páginas que iniciarem com "/project/" e tiverem algo escrito depois do segundo "/"
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  if ((!strMatchesRegex(to.path, allowedPathsRegex)) && (to.path != "/not-found")) {
    return { path: '/not-found', params: {} }
  }
})

export default router