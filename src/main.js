import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from "./store/index.js";
import router from './routes/index.js';
import { createHead } from '@vueuse/head';

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.use(store);
app.mount('#app');
