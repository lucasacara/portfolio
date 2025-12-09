import './css/reset.css';
import "./css/primary-colors.css";
import "./css/text-styles.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './pages/router.js';

createApp(App)
  .use(router)
  .mount('#app')