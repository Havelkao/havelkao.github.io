<template>
    <div>
        <div class="title" v-if="articles.length > 0">Latest</div>
        <section class="latest">
            <BlogCard
                v-for="article in articles"
                :key="article.title"
                :title="article.title"
                :subtitle="article.subtitle"
                @click="redirect(article.name)"
            />
        </section>
    </div>
</template>

<script setup>
import BlogCard from "./BlogCard.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const articles = useStore().state.articles.slice(0, 2);

const router = useRouter();
function redirect(articleName) {
    router.push(`/blog/${articleName}`);
}
</script>

<style scoped>
.latest {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.title {
    font-size: 0.75rem;
    color: var(--color-secondary);
    margin-bottom: 0.25rem;
}
</style>
