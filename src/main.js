import { createApp } from "vue";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from "./App.vue";
import router from "./router";

import { surveyPlugin } from "survey-vue3-ui";
import { surveyCreatorPlugin } from "survey-creator-vue";

createApp(App)
.use(surveyPlugin)
.use(surveyCreatorPlugin)
.use(router)
.mount("#app");
