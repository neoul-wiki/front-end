<template>
  <div id="app">
    <top-nav_o></top-nav_o>
    <div class="content">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
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
  margin-top: 60px;
}
</style>
