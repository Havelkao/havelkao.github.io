<template>
    <Navigation />
    <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
            <main :key="route">
                <component :is="Component" />
            </main>
        </transition>
    </router-view>
    <Footer />
</template>

<script setup>
import Navigation from "./components/common-ui/Navigation.vue";
import Footer from "./components/common-ui/Footer.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
    store.dispatch("getAbout");
    store.dispatch("getArticles");
    store.dispatch("getProjects");
});
</script>

<style>
#app {
    margin: auto;
    padding: 0 1.3rem 0 1rem;
    max-width: 42rem;
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content auto min-content;
    grid-gap: 4.5rem;
}

main {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
