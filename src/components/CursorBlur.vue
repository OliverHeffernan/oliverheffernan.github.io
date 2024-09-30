<template>
    <div id="cursorBlur"></div>
</template>

<style>

#cursorBlur {
    position: fixed;
    left: calc(50% - 100px);
    top: calc(50% - 100px);
    width: 200px;
    height: 200px;
    background-color: rgba(0, 100, 207, 0.281);
    text-rendering: optimizeLegibility;
    filter: blur(100px);
    transition: opacity 0.4s;
    z-index: 1;
}

/* Safari 7.1+ */

_::-webkit-full-page-media, _:future, :root #cursorBlur {
    display: none;
}

</style>

<script>

function onMouseMoveBlur(event) {
    const mouseX = event.clientX - 50;
    const mouseY = event.clientY - 50;

    let cursorBlur = document.getElementById("cursorBlur");

    cursorBlur.style.opacity = "100%";

    cursorBlur.style.left = mouseX + "px";
    cursorBlur.style.top = mouseY + "px";
}

function onMouseLeave() {
    document.getElementById("cursorBlur").style.opacity = "0";
}

document.addEventListener("mousemove", onMouseMoveBlur);
document.addEventListener("mouseleave", onMouseLeave);

</script>