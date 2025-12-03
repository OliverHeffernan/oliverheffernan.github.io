<template>
	<div id="starsContainer">
		<StarTag v-for="n in 80" :key="n" :instance="n" />
	</div>
</template>

<script>

import StarTag from "./StarTag.vue";

export default {
	name: "StarsContainer",
	components: {
		StarTag
	}
}

</script>

<style>

#starsContainer {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
	z-index: 0;
	overflow-x: hidden;
}

</style>
