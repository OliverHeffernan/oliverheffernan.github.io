<template>
    <i
        :class="`devicon-${icon}-plain icon ${outline ? 'outline' : 'filled'}`"
        :style="`font-size: ${font_size || '64px'}`"
    >
        <div class="colourIconContainer">
            <img
                v-if="icon != 'python'"
                class="colourIcon"
                :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`"
            />
            <img
                v-else
                class="colourIcon python"
                :src="`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`"
            />
        </div>
    </i>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(["icon", "font_size", "outline"]);
</script>
<style scoped>
@keyframes colourIconAnim {
    0% {
        opacity: 0;
    }
    37.5% {
        opacity: 0;
    }
    42.5% {
        opacity: 1;
    }
    57.5% {
        opacity: 1;
    }
    62.5% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}
.colourIcon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.4s;
}
.colourIconContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: colourIconAnim linear;
    animation-timeline: view();
    transition: opacity 0.4s;
}

.icon {
    position: relative;
    scale: 1;
    transition: all 0.4s;
}

.python {
    scale: 1.2;
}

@keyframes outlineAnim {
    0% {
        -webkit-text-stroke: 1px #787878;
    }
    37.5% {
        -webkit-text-stroke: 1px #787878;
    }
    42.5% {
        -webkit-text-stroke: 0px transparent;
    }
    57.5% {
        -webkit-text-stroke: 0px transparent;
    }
    62.5% {
        -webkit-text-stroke: 1px #787878;
    }
    100% {
        -webkit-text-stroke: 1px #787878;
    }
}

.outline {
    color: transparent;
    -webkit-text-stroke: 1px #787878;
    animation: outlineAnim linear;
    animation-timeline: view();
}

.filled {
    color: #1E1E1E;
}
</style>
