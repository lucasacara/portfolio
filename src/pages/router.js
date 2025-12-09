import { createWebHistory, createRouter } from 'vue-router'

import Home from './Home.vue';
import Project from './Project.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/project/:id', component: Project },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router