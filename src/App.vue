<template>
  <ScrollAnimator />
  <HomeSpread />
  <SkillsSection />
  <ProjectSection />
  <MainFooter />
</template>

<script>
import ScrollAnimator from "./components/ScrollAnimator.vue";
import HomeSpread from "./components/HomeSpread.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    HomeSpread,
    SkillsSection,
    ScrollAnimator,
    ProjectSection,
    MainFooter,
  },
};
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
