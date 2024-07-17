<script>

import SkillIcon from './SkillIcon.vue';

export default {
    name: 'ProjectContainer',
    props: {
        title: {
            type: String,
            required: true
        },
        blurb: {
            type: String,
            required: true
        },
        skillIcons: {
            type: Array,
            required: true
        }
    },
    components: {
        SkillIcon
    }
}

</script>

<template>

<div class="projectContainer">
    <h1> {{ title }}</h1>
    <p> {{ blurb }}</p>
    <div class="icons">
        <SkillIcon
            v-for="(skillIcon, index) in skillIcons"
            :key="index"
            :iconClass="skillIcon"
        />
    </div>
</div>

</template>

<style>

.projectContainer {
    background-color: rgb(42,42,42);
    padding: 50px;
    border-radius: 50px;
    box-shadow: 0px 0px 10px black;
    width: min(250px, calc(100vw - 250px));
    margin: 25px;
}

</style>