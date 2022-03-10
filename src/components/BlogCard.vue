<template>
    <div class="card">
        <div class="title">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    subtitle: String,
});
</script>

<style scoped>
.card:hover {
    cursor: pointer;
}
.title {
    font-size: 1.5rem;
}

.title:hover {
    color: var(--color-tertiary);
}
.subtitle {
    color: var(--color-secondary);
}
</style>
