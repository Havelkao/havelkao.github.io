<template>
    <footer>
        <div id="credits">
            <div id="author">Havelkao</div>
            <div id="year">
                <span id="smiley">&#9786</span>
                 2022 Fueled by Vue
            </div>
        </div>
        <div id="contact">
            <Icon img="/icons/github.svg" href="https://github.com/havelkao" mask="mask1" />
            <Icon img="/icons/linkedin.svg" href="https://www.linkedin.com/in/havelkao/" mask="mask2" />
        </div>
    </footer>
</template>

<script setup>
import Icon from "../Icon.vue";
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

}

#credits {
    display: flex;
    flex-direction: column;
    align-items: start;
}

#author {
    font-size: 1rem;
}

#contact {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

#year {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
}

#smiley {
    transform: translateY(-1.2px)
    
}
</style>
