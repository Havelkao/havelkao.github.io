<template>
    <a :href="href" target="_blank">
        <svg :width="size" :height="size">
            <defs>
                <mask :id="mask" x="0" y="0" :width="size" :height="size">
                    <image :href="img" />
                </mask>
            </defs>
            <rect
                x="0"
                y="0"
                :width="size"
                :height="size"
                style="stroke: currentColor; fill: currentColor"
                :mask="`url('#${mask}')`"
            />
        </svg>
    </a>
</template>

<script setup>
defineProps({
    img: String,
    href: String,
    mask: String,
});

const size = "25";
</script>

<style scoped>
svg {
    color: var(--color-primary);
}
svg:hover {
    color: var(--color-tertiary);
    cursor: pointer;
}
</style>
