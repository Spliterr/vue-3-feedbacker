/* eslint-disable comma-dangle */
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toast-notification";

import "vue-toast-notification/dist/theme-sugar.css";
import "animate.css";
import "@/assets/css/tailwind.css";
import "@/assets/css/fonts.css";

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount("#app");
