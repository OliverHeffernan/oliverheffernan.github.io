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
        <p v-html="blurb"></p>
    </div>
</div>

</template>

<style scoped>

#container {
    background-color: rgb(42, 42, 42);
    padding: 50px;
    margin-bottom: 50px;
    border-radius: 50px;
    align-items: center;
    width: calc(100vw - 200px);
    box-shadow: 0px 0px 10px black;
}

@media (max-width: 620px) {
    #container {
        display: block;
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
    }

    i {
        text-align: left;
    }
}

#container i {
    font-size: 100px;
    margin-right: 50px;
}

</style>