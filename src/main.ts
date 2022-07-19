import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';

import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'uno.css';

const app = createApp(App);
const head = createHead();

app.use(router).use(head).mount('#app');
