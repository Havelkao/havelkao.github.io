import { createStore } from "vuex";
import { getContent, getArticles, getProjects } from "./utils/ajax";
import { getLast } from "./utils/array";

const store = createStore({
    state: {
        articles: [],
        projects: [],
        about: "",
    },
    mutations: {
        field(state, payload) {
            state[payload.field] = payload.value;
        },
        addContent(state, payload) {
            const index = state.articles.findIndex((article) => article.filename === payload.filename);
            state.articles[index].content = payload.value;
        },
    },
    actions: {
        getAbout({ commit }) {
            getContent("/about.md").then(
                (data) => {
                    commit("field", { field: "about", value: data });
                },
                (error) => Promise.reject(error)
            );
        },
        getArticles({ commit }) {
            getArticles("/blog/articles.json").then(
                (data) => {
                    commit("field", { field: "articles", value: data });
                },
                (error) => Promise.reject(error)
            );
        },
        getArticle({ commit }, path) {
            getContent(path).then(
                (data) => {
                    const filename = getLast(path.split("/"));
                    commit("addContent", { value: data, filename });
                },
                (error) => Promise.reject(error)
            );
        },
        getProjects({ commit }) {
            getProjects("/projects.json").then(
                (data) => {
                    commit("field", { field: "projects", value: data });
                },
                (error) => Promise.reject(error)
            );
        },
    },
});

export default store;
