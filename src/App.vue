<template>
  <ScrollAnimator />
  <NavBar />
  <HomeSpread />
  <SkillsSection />
  <ProjectSection />
  <MainFooter />
</template>

<script>
import ScrollAnimator from "./components/ScrollAnimator.vue";
import NavBar from "./components/NavBar.vue";
import HomeSpread from "./components/HomeSpread.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
