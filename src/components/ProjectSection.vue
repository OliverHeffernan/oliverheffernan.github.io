<script>

import ProjectContainer from './ProjectContainer.vue';

export default {
    name: 'ProjectSection',
    components: {
        ProjectContainer
    }
}

</script>

<template>

<div id="projectSection">
    <ProjectContainer
        title="RaceTracker"
        blurb="A free to use running race organiser. Fully editable results, exportable pdf results. All data is handled through JavaScript on the client-side, so your information is safe."
        :skillIcons="['fa-brands fa-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
    />
</div>

</template>

<style scoped>

#projectSection {
    background: linear-gradient(#00ffa2, #0094a8);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>