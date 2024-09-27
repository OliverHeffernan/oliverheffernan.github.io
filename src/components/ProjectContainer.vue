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
        },
        ghLink: {
            type: String,
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
    <h2><a :href="ghLink" target="_blank"> {{ title }} </a></h2>
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
    /* background-color: rgb(42,42,42); */
    background-color: white;
    padding: 25px;
    border-radius: 30px;
    box-shadow: 0px 0px 10px black;
    width: min(250px, calc(100vw - 250px));
    margin: 25px;
    text-align: left;
}

.projectContainer a {
    color: black;
}

.projectContainer p {
    color: black;
}

.projectContainer i {
    color: rgb(0, 100, 207);
}

</style>