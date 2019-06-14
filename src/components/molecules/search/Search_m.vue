<template>
  <div class="search_m">
    <div class="search_text_out">
      <input type="text" id="search_text">
    </div>
    <label class="search_label" for="search_text">
      <i class="fas fa-search search_icon"></i>
    </label>
  </div>
</template>

<script>
    export default {
        name: "Search_m"
    }
</script>

<style scoped>
  .search_m{
    position: relative;
    border-radius: 5px;
    background: white;
    display: inline-flex;
    overflow: hidden;
    height: 32px;
  }
  .search_text_out{
    height: 32px;
    width: 100%;
  }
  #search_text{
    outline: none;
    border: none;
    font-size: 16px;
    margin-top: 7px;
    margin-left: 7px;
    width: 100%;
  }
  .search_label{
    width: 32px;
    height: 32px;
    border-radius: 5px;
    cursor: pointer;
  }
  .search_icon{
    margin: 7px auto;
    color: #209cff;
  }
</style>
