<template>
    <Header title="havelkao">
        <template #below>
            <div class="typewriter">{{ typewriter }}</div>
        </template>
    </Header>
    <section class="about" v-html="marked(about)"></section>
    <Latest />
</template>

<script setup>
import Header from "../components/common-ui/Header.vue";
import Latest from "../components/Latest.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { makeTypewriter } from "../utils/typewriter";
import { marked } from "marked";

const model = ["web developer", "data analyst", "ml enthusiast", "minimalist"];
const typewriter = ref("");
makeTypewriter(model, (value) => {
    typewriter.value = value;
})();

const about = useStore().state.about;
</script>

<style scoped>
.typewriter {
    color: var(--color-tertiary);
    font-variant: small-caps;
}
.about {
    color: var(--color-secondary);
}
</style>
