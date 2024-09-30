<template>
    <div class="star" :id="'star' + this.instance"></div>
</template>

<script>


export default {
    props: {
        instance: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            pos: [0,0],
            speed: 5
        }
    },
    mounted() {
        console.log(this.instance);
        this.speed = Math.random() * 3 + 1;
        const instance = document.getElementById(`star${this.instance}`);

        this.pos[0] = Math.random() * window.innerWidth;
        this.pos[1] = Math.random() * window.innerHeight;

        let size = 2 * this.speed;
        instance.style.opacity = (size/8).toString();
        console.log(instance.style.opacity);
        instance.style.width = size + "px";
        instance.style.height = size + "px";

        instance.style.left = this.pos[0] + "px";
        instance.style.top = this.pos[1] + "px";

        this.runEveryFrame(this.instance);
    },
    methods: {
        runEveryFrame() {
            // eslint-disable-next-line
            const moveStar = () => {
                this.pos[0] -= this.speed;

                if (this.pos[0] <= 0) {
                    this.pos[1] = Math.random() * window.innerHeight;
                    document.getElementById(`star${this.instance}`).style.top = this.pos[1] + "px";
                    this.pos[0] = window.innerWidth;
                }
                document.getElementById(`star${this.instance}`).style.left = this.pos[0] + "px";

                requestAnimationFrame(moveStar);
            }
            requestAnimationFrame(moveStar);
        }
    }
};


</script>

<style>

@keyframes star-anim {
    0% {
        opacity: 100%;
    }
    100% {
        opacity: 5%;
    }
}

.star {
    background-color: white;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    position: absolute;
    animation: star-anim linear;
    animation-timeline: scroll();
    z-index: 0;
}

</style>