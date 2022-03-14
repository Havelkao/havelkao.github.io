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

<style>
:root {
    --column-gap: 1rem;
}
</style>

<style scoped>
section {
    column-width: 15rem;
    column-gap: var(--column-gap);
}
</style>
