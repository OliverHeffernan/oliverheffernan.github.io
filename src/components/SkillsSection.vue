<script>

import SkillContainer from './SkillContainer.vue';

export default {
    name: 'NavBar',
    components: {
        SkillContainer
    }
}

</script>

<template>
    
    <div id="section">
        <h1>My Skills</h1>
        <SkillContainer 
            icon="fa-brands fa-js" 
            title="JavaScript" 
            blurb="I have a lot of experience with JavaScript. A project that I created using JavaScript was 'RaceTracker', this is in a public repository on my github profile. 
            <br><br>
            I have also created a very basic javaScript front-end framework called 'block.js', also a public repository on my github profile. "
        />

        <SkillContainer
            icon="fa-brands fa-unity"
            title="Unity"
            blurb="I have created several games using Unity. One of these was 'Lone Wolf: World War 2', which I created with my brother, and published on Steam.
            <br><br>
            I am also developing a mobile game using Unity which I intend to publish on the Google Play Store."
        />

        <SkillContainer
            icon="fa-brands fa-vuejs"
            title="Vue"
            blurb="I have a small amount of experience with the Vue front-end framework. I used it to create this website."
        />
    </div>

</template>

<style scoped>

h1 {
    margin-bottom: 25px;
    width: 100%;
    text-align: center;
}

#section {
    margin: 0;
    /*background-color: rgb(0, 157, 255);*/
    background: linear-gradient(rgb(0,157,255), rgb(0,120,255));
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>