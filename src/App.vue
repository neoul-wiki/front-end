<template>
  <div id="app">
    <top-nav_o></top-nav_o>
    <router-view/>

    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import TopNav_o from "./components/organisms/TopNav_o";
import BottomFooter from "./components/organisms/BottomFooter";
export default {
  name: 'App',
  components: {BottomFooter, TopNav_o}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
