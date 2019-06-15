<template>
    <div class="topNav_o">
      <div class="topNav_in">
        <div class="topNav_left">
          <neoul-wiki-logo_a class="logo"></neoul-wiki-logo_a>
          <search_m class="lBtns_in"></search_m>
        </div>
        <div class="topNav_right">
          <nav-buttons_m></nav-buttons_m>
          <label for="userIcon_check">
            <user-icon_a v-bind:imgPath="imgPath" id="userIcon"></user-icon_a>
          </label>
          <input type="checkbox" id="userIcon_check">
          <user-drop-menu_m class="userIcon_drop_down"></user-drop-menu_m>
        </div>
      </div>
    </div>
</template>

<script>
    import Search_m from "../molecules/search/Search_m";
    import NeoulWikiLogo_a from "../atoms/logo/NeoulWikiLogo_a";
    import UserIcon_a from "../atoms/icons/UserIcon_a";
    import NavButtons_m from "../molecules/btns/NavButtons_m";
    import UserDropMenu_m from "../molecules/drop/UserDropMenu_m";

    export default {
        name: "TopNav_o",
        data(){
          return{
            imgPath:"../../../../static/img/user/content02.png"
          }
        },
      components: {UserDropMenu_m, NavButtons_m, UserIcon_a, NeoulWikiLogo_a, Search_m}
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
    transition: all 0.2s ease-out;
  }

  .lBtns_in{
    margin-top: 6px;
    margin-left: 6px;
  }
  .topNav_left{
    height: 45px;
    display: inline-flex;
    float: left;
  }
  .topNav_right{
    position: relative;
    float: right;
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
    cursor: pointer;
  }
  .userIcon_drop_down{
    display: none;
  }
  #userIcon_check{
    position: fixed;
    right: 99999px;
  }
  #userIcon_check:checked ~ .userIcon_drop_down{
    display: flex;
  }
  @media (max-width: 1200px) {
    .topNav_in{
      width: 100%;
    }
  }
</style>
