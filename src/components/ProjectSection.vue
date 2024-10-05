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
    <h3>Click on the container to view the project.</h3>

    <div id="projectsContainer">
        <ProjectContainer
            title="RaceTracker"
            blurb="A free to use running race organiser. Fully editable results, exportable pdf results. All data is handled through JavaScript on the client-side, so your information is safe."
            ghLink="https://oliverheffernan.github.io/Racetracker/"
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
            ghLink="https://oliverheffernan.github.io/markdown-to-html-translator/"
            :skillIcons="['fa-brands fa-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
        />
        <ProjectContainer
            title="Vue Calculator"
            blurb="A keyboard based calculator built in Vue. Utilises the math.js library. Includes features like syntax highlighting, bracket pair highlighting, super script, multi-line calculations, and a wide range of mathematical functions."
            ghLink="https://oliverheffernan.github.io/vue-calculator/"
            :skillIcons="['fa-brands fa-vuejs', 'fa-brands fa-js', 'fa-brands fa-html5', 'fa-brands fa-css3-alt']"
        />
        <ProjectContainer
            title="Ice Cold VS Code theme"
            blurb="A dark theme for Visual Studio Code, a dark deep slate blue background, and blue tones on the text. It creates a blue vibe without sacrificing readability of code."
            ghLink="https://github.com/OliverHeffernan/ice-cold-VSCode-theme"
            :skillIcons="['fa-brands fa-js']"
        />
    </div>
</div>

</template>

<style scoped>

#projectsContainer {
    /* background: linear-gradient(#00ffa2, #0094a8); */
    background: none;
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    gap: 10px;
}

h1 {
    margin-top: 50px;
}

h3 {
    margin-bottom: 50px;
}

#projectsSection {
    padding-top: 35px;
    background: linear-gradient(rgb(40,40,40), black);
    text-align: center;
}

@media (max-width: 620px) {
    #projectsContainer {
        width: min(500px, 100vw);
    }
}

@media (min-width: 620px) {
    #projectsContainer {
        width: min(1095px, calc(100vw - 110px));
    }
}

</style>