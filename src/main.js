import './css/reset.css';
import "./css/primary-colors.css";
import "./css/component-colors.css";
import "./css/text-styles.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router.js';

const app = createApp(App);
app.use(router)
app.mount('#app')