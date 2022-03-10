<template>
    <div class="card">
        <div class="card-image">
            <img :src="imageURL" :alt="image" />
            <a :href="link" target="blank" class="card-title">{{ title }}</a>
        </div>
        <div class="card-content-wrapper">
            <div class="card-content">
                <div class="card-description">{{ description }}</div>
                <div v-html="tags.map((t) => `<span style='color:${colorMap[t]}'>#${t}</span>`).join(' ')"></div>
            </div>
            <a :href="link" target="blank" class="card-action"><span>VIEW</span><span class="arrow">&#8594;</span></a>
        </div>
    </div>
</template>

<script setup>
import { getURL } from "../utils/ajax";

const props = defineProps({
    title: String,
    description: String,
    image: String,
    tags: Array,
    link: String,
});

const imageURL = getURL() + "/images/" + props.image;

const colorMap = {
    javascript: "#F2D682",
    threejs: "#E35966",
    python: "#346FA0",
    vite: "#AACD93",
    vuejs: "#279E74",
    flask: "#91705F",
    static: "#60387D",
    css3: "#33A4D5",
    pandas: "#E9859D",
};
</script>

<style scoped>
.card {
    display: inline-block;
    position: relative;
    break-inside: avoid;
    margin-bottom: 2rem;
    border-radius: 10px;
    border-bottom: 5px solid rgb(0 0 0 / 14%);
    border-right: 4px solid rgb(0 0 0 / 14%);
    border-left: 1px solid rgb(0 0 0 / 14%);
}

.card:hover > .card-image > img {
    transform: scale(1.05);
}

.card-image {
    position: relative;
    overflow: hidden;
}

img {
    display: block;
    border-radius: 10px 10px 0 0;
    width: 100%;
    max-height: 16rem;
    min-height: 16rem;
    object-fit: cover;
    position: relative;
    transition: all 0.2s ease-in-out;
}

.card-title {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1.3rem;
    line-height: 1.3rem;
    padding: 1rem;
    width: 100%;
    height: 5rem;
    max-height: 7rem;
    background-color: rgba(32, 33, 36, 0.85);
}

.card:hover > .card-image > .card-title {
    color: var(--color-tertiary);
}

.card-content-wrapper {
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
}

.card-content {
    display: grid;
    grid-gap: 0.5rem;
    color: var(--color-secondary);
}
.card-action {
    letter-spacing: 0.1em;
    color: var(--color-tertiary);
    font-weight: 600;
}
.card:hover > .card-content-wrapper > .card-action > .arrow {
    visibility: visible;
}
.arrow {
    font-size: 1.3rem;
    visibility: hidden;
    color: var(--font-color-tertiary);
}
</style>
