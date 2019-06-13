<template>
    <div class="topNav_o">
      <div class="topNav_in">
        <div class="topNav_left">
          <neoul-wiki-logo_a class="logo"></neoul-wiki-logo_a>
          <search_m class="lBtns_in"></search_m>
        </div>
        <div class="topNav_center">

        </div>
        <div class="topNav_right">
          <nav-buttons></nav-buttons>
          <user-icon_a v-bind:imgPath="imgPath" id="userIcon"></user-icon_a>
        </div>
      </div>
    </div>
</template>

<script>
    import Search_m from "../molecules/search/Search_m";
    import NeoulWikiLogo_a from "../atoms/logo/NeoulWikiLogo_a";
    import UserIcon_a from "../atoms/icons/UserIcon_a";
    import NavButtons from "../molecules/btns/NavButtons";
    export default {
        name: "TopNav_o",
        data(){
          return{
            imgPath:"../../../../static/img/user/content02.png"
          }
        },
      components: {NavButtons, UserIcon_a, NeoulWikiLogo_a, Search_m}
    }
</script>

<style scoped>
  .topNav_o{
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    width: 100%;
    background-image: linear-gradient(to right, #209cff 0%, #68e0cf 100%);
    opacity: 0.9;
    height: 45px;

  }
  .topNav_in{
    width: 80%;
    margin: 0px auto;
    position: relative;
  }
  .lBtns_in{
    margin: 5px;
  }
  .topNav_left{
  }
  .topNav_center{

  }
  .topNav_right{
    position: absolute;
    right: 0px;
  }
  .logo{
    float: left;
  }
  #userIcon{
    width: 34px;
    height: 34px;
    margin-top: 3px;
    margin-right: 5px;
    float: right;
  }
</style>
