<script>

export default {
    name: 'SkillContainer',
    props: {
        icon: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        blurb: {
            type: String,
            required: true
        }
    }
}

</script>

<template>

<div id="container">
    <i :class="icon"></i>
    <div>
        <h1> {{ title }} </h1>
        <div id="underlineContainer">
            <div id="underline"></div>
        </div>
        <p v-html="blurb"></p>
    </div>
</div>

</template>

<style scoped>



@keyframes scroll-anim {
    0% {
        filter: blur(50px);
        transform: scale(50%);
    }
    25% {
        filter: blur(0);
        transform: scale(100%);
    }
}

#container {
    background-color: rgb(42, 42, 42);
    padding: 27px;
    margin: 10px;
    border-radius: 15px;
    align-items: center;
    box-shadow: 0px 0px 10px black;
    transition: filter transform 0.5s;

    animation: scroll-anim linear;
    animation-timeline: view();
    z-index: 10;
}

#container i {
    font-size: 100px;
    /* color:rgb(42, 42, 42); */
    filter: drop-shadow(0px 0px 10px black);
}

@keyframes underline-anim {
    0% {
        width: 0px;
    }

    100% {
        width: 40%;
    }
}

#underlineContainer {
    height: 6px;
    background: linear-gradient(90deg, rgb(0, 145, 255), transparent);
    transform-origin: 0 50%;
    overflow-x: hidden;
    border-radius: 3px;
    margin-bottom: 5px;

    animation: underline-anim linear;
    animation-timeline: view();
}

#underline {
    width: 100%;
    height: 6%;
    background: linear-gradient(90deg,  rgb(0, 145, 255), transparent);
}

@media (max-width: 620px) {
    #container {
        display: block;
        width: min(500px, calc(100% - 40px));
    }

    i {
        width: 100%;
        text-align: center;
        margin-bottom: 25px;
    }
}

@media (min-width: 620px) {
    #container {
        display: flex;
        width: min(1000px, calc(100% - 200px));
    }

    #container i {
        margin-right: 50px;
        text-align: left;
    }
}
</style>