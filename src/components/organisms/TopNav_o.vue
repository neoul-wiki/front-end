<template>
    <div class="topNav_o">
      <div class="topNav_in">
        <div class="topNav_left">
          <neoul-wiki-logo_a class="logo no-drag"></neoul-wiki-logo_a>
          <search_m class="lBtns_in"
                    v-on:search_action="go_search_action">
          </search_m>
        </div>
        <div class="topNav_right">
          <nav-buttons_m class="no-drag"></nav-buttons_m>
          <label for="userIcon_check" class="no-drag">
            <user-icon_a
              v-bind:imgPath="get_userInfo().imgPath"
              id="userIcon">
            </user-icon_a>
          </label>
          <input type="checkbox" id="userIcon_check" class="no-drag">
          <user-drop-menu_m
            class="userIcon_drop_down no-drag"
            v-bind:userInfo="get_userInfo()"
            v-on:dropDown_false="closedDropDown">
          </user-drop-menu_m>
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

    import Vue from "vue"
    import Vuex from "vuex"

    Vue.use(Vuex)

    const store = new Vuex.Store({
      state:{
        userInfo:{
          nikName:'guest',
          id:'@guest',
          notice:0,
          level:0,
          point:0,
          imgPath:"../../../../static/img/user/content03.png"
        }
      },
      mutations:{
        set_userInfo:userInfo =>{
          userInfo.nikName='guest'
          userInfo.id = '@guest'
          userInfo.notice=0
          userInfo.level=0
          userInfo.point=0
          userInfo.imgPath="../../../../static/img/user/content03.png"
        }
      }
    })

    export default {
      name: "TopNav_o",
      data(){
        return{
          imgPath:"../../../../static/img/user/content02.png"
        }
      },
      methods:{
        set_userInfo(){
          store.commit('set_userInfo');
        },
        get_userInfo(){
          return store.state.userInfo
        },
        go_search_action(keyword){
          console.log(keyword)
          this.$emit('go_search_action', keyword);
        },
        closedDropDown(){
          document.getElementById("userIcon_check").checked = false;
        }
      },
      computed:{
        userInfo(){
          return store.state.userInfo
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
    min-width: 400px;
  }
  .topNav_in{
    width: 1200px;
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
  .no-drag {
    -ms-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
  @media (max-width: 1200px) {
    .topNav_in{
      width: 100%;
    }
  }
</style>
