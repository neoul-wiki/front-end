<template>
  <div class="search_m">
    <div class="search_in">
      <input class="search_text" type="text">
    </div>
    <div class="search_icon_out">
      <i class="fas fa-search" id="search_icon"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Search_m"
    }
</script>

<style scoped>
  .search_m{
    float: left;
    position: relative;
    width: 300px;
  }
  .search_text{
    outline: none;
    border: 0px;
    font-size: 12pt;
    line-height: 32px;
    background-color: rgba(14, 134, 190, 0.0);
    width: 80%;
    position: absolute;
    left: 8px;
  }
  .search_in{
    border-radius: 5px;
    background: rgba(255,255,255,0.8);
    width: 100%;
    position: relative;
    height: 34px;
  }
  .search_icon_out{
    position: absolute;
    top: 8px;
    right: 8px;
  }
  #search_icon{
    color: rgba(112, 203, 245, 0.9);
    cursor: pointer;
  }
</style>
