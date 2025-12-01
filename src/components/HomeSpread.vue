<template>
    <div id="firstFullScreen">
        <div id="nameContainer">
            <h1 id="bigName">Oliver Heffernan</h1>
            <h2>Software Engineer</h2>
        </div>
        <CursorBlur />
    </div>
    <StarsContainer />
</template>

<script>

import StarsContainer from "./StarsContainer.vue";
import CursorBlur from "./CursorBlur.vue";

export default {
    name: 'HomeSpread',
    components: {
        StarsContainer,
        CursorBlur
    }
}

function onMouseMove(event)
{
    const maxOffset = 40;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const offsetX = -(mouseX - winWidth/2)/(winWidth/2) * maxOffset;
    const offsetY = -(mouseY - winHeight/2)/(winHeight/2) * maxOffset;

    document.getElementById('nameContainer').style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

document.addEventListener('mousemove', onMouseMove);

</script>

<style>

#nameContainer {
    position: relative;
    z-index: 20;
}
@media (pointer:coarse) {
    #nameContainer {
        transition: transform 0.4s;
    }
}

@keyframes border-radius-anim {
    0% {
        /*border-radius: 0px;*/
        /*opacity: 100%;*/
    }
    100% {
        /*border-radius: 0px 0px 650px 650px;*/
        /*opacity: 0%;*/
    }
}

#firstFullScreen {
    width: 100%;
    height: 100vh;
    text-align: center;
    display: grid;
    align-items: center;
    overflow: hidden;
    /*background: linear-gradient(rgb(20,20,20), rgb(42, 42, 42));*/
    background-color: #212121;
    animation: border-radius-anim linear;
    animation-timeline: scroll();
    position: relative;
    /* cursor: none; */
}

#bigName {
    font-size: 70px;
    background-clip: text;
    /*color: rgb(255,255,255);*/
    color: white;
    z-index: 10;
    position: relative;
    transition: all 0.8s;
}

#bigName:hover {
    text-shadow: 0px 0px 20px rgb(0, 70, 255);
    color: rgb(204, 228, 255);
}

h2 {
    color: rgb(0, 145, 255);
}
</style>
