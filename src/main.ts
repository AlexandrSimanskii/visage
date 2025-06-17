import "./assets/style/main.scss";
import PrimeVue from 'primevue/config';
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);


app.use(createPinia());
app.use(PrimeVue);


app.mount("#app");
