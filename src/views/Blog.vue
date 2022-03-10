<template>
    <Header title="blog"></Header>
    <section class="articles">
        <BlogCard
            class="article"
            @click="redirect(article.name)"
            v-for="article in articles"
            :key="article.title"
            :title="article.title"
            :subtitle="article.subtitle"
        >
            <div class="more"><span>READ MORE</span><span class="arrow">&#8594;</span></div>
        </BlogCard>
    </section>
</template>

<script setup>
import BlogCard from "../components/BlogCard.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Header from "../components/common-ui/Header.vue";

const articles = useStore().state.articles;

const router = useRouter();
const currentPath = router.currentRoute.value.path;

function redirect(articleName) {
    router.push(`/blog/${articleName}`);
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section .article {
    border-bottom: 3px solid #2e3034;
}

.article:hover {
    cursor: pointer;
}

.more {
    letter-spacing: 0.1em;
    color: var(--color-tertiary);
    margin: 0.5rem 0 0.75rem 0;
}

.article:hover > div {
    color: var(--color-tertiary);
}

.arrow {
    font-size: 1.3rem;
    visibility: hidden;
    color: var(--font-color-tertiary);
}

.article:hover > .more > .arrow {
    visibility: visible;
}
</style>
