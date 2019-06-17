<template>
  <div id="app">
    <top-nav_o></top-nav_o>
    <router-view/>
  </div>
</template>

<script>
import TopNav_o from "./components/organisms/TopNav_o";
export default {
  name: 'App',
  components: {TopNav_o}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
