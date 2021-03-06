import { createApp } from "vue";
import router from "./router.js";
import store from "./store.js";
import App from "./App.vue";
import "./styles/global.css";
import "./styles/markdown.css";
import "highlight.js/styles/vs2015.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
