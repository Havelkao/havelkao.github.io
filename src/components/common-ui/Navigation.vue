<template>
    <nav>
        <router-link to="/"> home </router-link>
        <router-link to="/blog" :class="{ 'active-blog': currentRoute.startsWith('/blog') }"> blog </router-link>
        <router-link to="/portfolio"> portfolio </router-link>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import router from "../../router";

const currentRoute = computed(() => {
    return router.currentRoute.value.path;
});
</script>

<style scoped>
nav {
    padding-top: 1rem;
    display: flex;
    align-items: center;
}

a {
    margin-right: 1rem;
    color: var(--font-color-primary);
    text-decoration: none;
    text-underline-offset: 0.5rem;
}

a:hover {
    text-decoration: underline;
}
.active-blog,
.router-link-active {
    text-decoration: underline;
    color: var(--color-tertiary);
}
</style>
