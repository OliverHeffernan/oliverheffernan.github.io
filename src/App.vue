<template>
	<ScrollAnimator />
	<HomeSpread />
	<SkillsSection />
	<ProjectSection />
	<MainFooter />
</template>

<script setup>
import ScrollAnimator from "./components/ScrollAnimator.vue";
import HomeSpread from "./components/HomeSpread.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import MainFooter from "./components/MainFooter.vue";

import { onMounted } from "vue";

onMounted(() => {
	const prev = document.referrer;
	// redirecting to flash-flip if they are trying to confirm their email.
	if (prev.contains("verify?token")) {
		window.location.href = "https://oliverheffernan.github.io/flash-flip/dist/index.html#/signin";
	}
});

</script>

<style>
* {
	margin: 0;
	padding: 0;
}
body {
	overflow-x: hidden;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: white;
}
</style>
