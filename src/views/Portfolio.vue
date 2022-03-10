<template>
    <Header title="portfolio" />
    <section>
        <PortfolioCard
            v-for="project in projects"
            :key="project.name"
            :title="project.name"
            :description="project.description"
            :image="project.image"
            :tags="project.tags"
            :link="project.link"
        />
    </section>
</template>

<script setup>
import PortfolioCard from "../components/PortfolioCard.vue";
import Header from "../components/common-ui/Header.vue";
import { useStore } from "vuex";

const projects = useStore().state.projects;
</script>

<style scoped>
section {
    column-width: 13rem;
    column-gap: 2rem;
}

.tags {
    display: flex;
    gap: 1rem;
}
</style>
