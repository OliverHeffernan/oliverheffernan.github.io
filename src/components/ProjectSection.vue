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

<div id="projectsSection">
    <h1>My Projects</h1>
    <h3>Each project is linked to it's GitHub repository</h3>

    <div id="projectsContainer">
        <ProjectContainer
            title="RaceTracker"
            blurb="A free to use running race organiser. Fully editable results, exportable pdf results. All data is handled through JavaScript on the client-side, so your information is safe."
            ghLink="https://github.com/OliverHeffernan/Racetracker"
            :skillIcons="['fa-brands fa-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
        />
        <ProjectContainer
            title="Block.js Library"
            blurb="Block.js is an open-source, lightweight, simple-to-use JavaScript front-end framework. It makes it extremely simple to have multiple similar elements, without extremely repetitive code."
            ghLink="https://github.com/OliverHeffernan/block-js-library"
            :skillIcons="['fa-brands fa-vuejs', 'fa-brands fa-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
        />
        <ProjectContainer
            title="Markdown To HTML Converter"
            blurb="A simple tool that converts markdown code to html, and vice versa."
            ghLink="https://github.com/OliverHeffernan/markdown-to-html-translator"
            :skillIcons="['fa-brands fa-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
        />
        <ProjectContainer
            title="Vue Calculator"
            blurb="A keyboard based calculator built in Vue. Utilises the math.js library. Check it out in the link below."
            ghLink="https://github.com/OliverHeffernan/vue-calculator"
            :skillIcons="['fa-brands fa-vuejs', 'fa-brands fa-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
        />
    </div>
</div>

</template>

<style scoped>

#projectsContainer {
    /* background: linear-gradient(#00ffa2, #0094a8); */
    background: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#projectsSection {
    padding-top: 35px;
    background: linear-gradient(rgb(20,20,20), rgb(42, 42, 42));
    text-align: center;
}

</style>