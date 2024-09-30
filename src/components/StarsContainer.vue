<template>
    <div id="starsContainer">
        <StarTag v-for="n in 80" :key="n" :instance="n" />
    </div>
</template>

<script>

import StarTag from "./StarTag.vue";

export default {
    name: "StarsContainer",
    components: {
        StarTag
    }
}

</script>

<style>

@keyframes cursor-anim {
    0% {
        cursor: none;
    }
    25% {
        cursor: default;
    }
}
/*hello*/
#starsContainer {
    cursor: none;
    /* width: 100vw;
    height: 100vh;
    top: 0;
    left: 0; */
    z-index: 0;
    animation: cursor-anim linear;
    overflow-x: hidden;
    animation-timeline: scroll();
}

</style>