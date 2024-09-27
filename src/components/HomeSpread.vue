<template>
    <div id="firstFullScreen">
        <div id="nameContainer">
            <h1 id="bigName">Oliver Heffernan</h1>
            <h2>Software Engineer</h2>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomeSpread'
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

<style scoped>

@media (pointer:coarse) {
    #nameContainer {
        transition: transform 0.4s;
    }
}

#firstFullScreen {
    width: 100%;
    height: calc(100vh - 66px);
    text-align: center;
    display: grid;
    align-items: center;
    overflow-x: hidden;
    background: linear-gradient(rgb(20,20,20), rgb(42, 42, 42));
}

#bigName {
    font-size: 70px;
    background: -webkit-linear-gradient(45deg, white, rgb(180, 180, 180));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: text-shadow 0.8s;
}

#bigName:hover {
    text-shadow: 0px 0px 20px rgb(0, 70, 255);
}

h2 {
    color: rgb(0, 145, 255);
}

</style>