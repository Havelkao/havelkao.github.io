import { createRouter, createWebHashHistory } from "vue-router";
import Portfolio from "./views/Portfolio.vue";
import Blog from "./views/Blog.vue";
import Home from "./views/Home.vue";
import Article from "./views/Article.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/portfolio", name: "portfolio", component: Portfolio },
    { path: "/blog", name: "blog", component: Blog },
    { path: "/blog/:article/", name: "article", component: Article },
    { path: "/:catchAll(.*)", component: NotFound },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
