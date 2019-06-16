<template>
  <div id="mainContent_o">
    <div class="layout_out">
      <div class="layout_left"></div>
      <div class="layout_center"></div>
      <div class="layout_right"></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "main",
      data(){
        return {
          name: 'main'
        }
      }
    }
</script>

<style scoped>
 #mainContent_o{
   top: 45px;
   width: 100%;
   height: 100%;
   position: absolute;
 }
  .layout_out{
    width: 1200px;
    margin: 0px auto;
    text-align: left;
  }
</style>
