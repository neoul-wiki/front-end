<template>
  <div class="userIcon_a">
    <img :src="imgPath" class="userIcon_img">
  </div>
</template>

<script>
    export default {
      props:['imgPath'],
        name: "UserIcon_a"
    }
</script>

<style scoped>
  .userIcon_a{
    position: relative;
    border-radius: 50%;
    background: white;
    border: 2px solid rgba(255,255,255,0.1);
    transition: color 0.2s ease;
    cursor: pointer;
  }
  .userIcon_img{
    position: relative;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    margin: 0px;
    cursor: pointer;
  }
  .userIcon_a:hover{
    box-shadow: 0px 0px 6px 0px #1b5da6;
  }
</style>
