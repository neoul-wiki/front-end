<template>
  <div class="search_m">
    <div class="search_text_out">
      <input type="text"
             id="search_text"
             v-on:keyup.13="search_action">
    </div>
    <label class="search_label" for="search_text">
      <i class="fas fa-search search_icon" v-on:click="search_action"></i>
    </label>
  </div>
</template>

<script>
    export default {
        name: "Search_m",
      methods:{
          search_action(){
            // console.log(document.getElementById("search_text").value);
            this.$emit('search_action', document.getElementById("search_text").value);
            document.getElementById("search_text").value = "";
          }
      }
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
    margin-top: 5px;
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
  @media (max-width: 499px){
    .search_m{
      width: 150px;
    }
  }
</style>
