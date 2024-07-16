<template>
<NavBar />
<HomeSpread />
<GradientTransition transHeight="150px" startColor="rgb(42,42,42)" endColor="rgb(0, 157, 255)" />
<SkillsSection />

</template>

<script>
import NavBar from './components/NavBar.vue';
import HomeSpread from './components/HomeSpread.vue';
import GradientTransition from './components/GradientTransition.vue';
import SkillsSection from './components/SkillsSection.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HomeSpread,
    GradientTransition,
    SkillsSection
  }
}
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