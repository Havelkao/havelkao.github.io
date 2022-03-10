<template>
    <header>
        <slot name="above"></slot>
        <h1>{{ formatTitle(title) }}</h1>
        <slot name="below"></slot>
    </header>
</template>

<script setup>
defineProps({
    title: String,
});

function formatTitle(str) {
    return str[0].toUpperCase() + str.slice(1) + ".";
}
</script>

<style scoped>
h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
}
</style>
