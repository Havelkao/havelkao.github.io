<template>
    <article v-if="article" class="markdown-body">
        <h1 class="title">{{ article.title }}</h1>
        <h3 class="date">{{ formatDate(article.published) }}</h3>
        <div class="content" v-html="marked.parse(article.content)"></div>
    </article>
    <NotFound v-else />
</template>

<script setup>
import NotFound from "./NotFound.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { marked } from '../utils/marked'


const articleName = useRoute().params.article;
const store = useStore();
const article = store.state.articles.find((article) => article.name === articleName);

onMounted(() => {
    if (article && article.content === "") {
        store.dispatch("getArticle", `/blog/${article.filename}`);
    }
});

function formatDate(str) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    let date = new Date(str);
    return date.toLocaleDateString(undefined, options);
}
</script>

<style scoped>
.title {
    font-size: 2.3rem;
    margin: 0;
    padding: 0;
}

.date {
    font-size: 1rem;
    color: var(--color-secondary-100);
    margin: 0;
}

.content {
    margin-top: 2rem;
    color: var(--color-secondary);
}
</style>
