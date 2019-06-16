<template>
    <div class="topNav_o">
      <div class="topNav_in">
        <div class="topNav_left">
          <router-link to="/">
            <neoul-wiki-logo_a class="logo no-drag"></neoul-wiki-logo_a>
          </router-link>
          <search_m class="lBtns_in"
                    v-on:search_action="go_search_action">
          </search_m>
<!--          <search_drop-down v-bind:search_data="search_data"></search_drop-down>-->
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
            v-on:dropDown_false="closedDropDown"
          >
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
    import Search_dropDown from "../molecules/search/Search_dropDown_m";

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
        },
        search_data:[
          {date:'19.06.18', type:'게시판', name:'아이패드 산다 드디어'},
          {date:'19.06.16', type:'문서', name:'아이패드 프로 3세대'},
          {date:'19.06.15', type:'게시판', name:'아이패드 좋냐? ㅇㅅㅇ'},
          {date:'19.06.14', type:'토론', name:'아이패드 vs 갤럭시 탭 어떤것이 더 좋은가?'},
          {date:'19.06.14', type:'토론', name:'아이패드지 당연히'},
          {date:'19.06.13', type:'문서', name:'아이패드'},
          {date:'19.06.12', type:'게시판', name:'아이패드 사고싶어요'},
          {date:'19.06.11', type:'게시판', name:'아이패드 얼마에요?'},
          {date:'19.06.10', type:'게시판', name:'아이패드 애플에서 삼'},
          {date:'19.06.10', type:'토론', name:'아이패드'},
          {date:'19.06.10', type:'게시판', name:'아이패드는 존엄'},
          {date:'19.06.10', type:'게시판', name:'아이패드사고싶다'},
          {date:'19.06.10', type:'게시판', name:'아이패드 끄아아앙'},
        ]
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
          imgPath:"../../../../static/img/user/content02.png",
          search_data:[
            {date:'19.06.18', type:'게시판', name:'아이패드 산다 드디어'},
            {date:'19.06.16', type:'문서', name:'아이패드 프로 3세대'},
            {date:'19.06.15', type:'게시판', name:'아이패드 좋냐? ㅇㅅㅇ'},
            {date:'19.06.14', type:'토론', name:'아이패드 vs 갤럭시 탭 어떤것이 더 좋은가?'},
            {date:'19.06.14', type:'토론', name:'아이패드지 당연히'},
            {date:'19.06.13', type:'문서', name:'아이패드'},
            {date:'19.06.12', type:'게시판', name:'아이패드 사고싶어요'},
            {date:'19.06.11', type:'게시판', name:'아이패드 얼마에요?'},
            {date:'19.06.10', type:'게시판', name:'아이패드 애플에서 삼'},
            {date:'19.06.10', type:'토론', name:'아이패드'},
            {date:'19.06.10', type:'게시판', name:'아이패드는 존엄'},
            {date:'19.06.10', type:'게시판', name:'아이패드사고싶다'},
            {date:'19.06.10', type:'게시판', name:'아이패드 끄아아앙'},
          ]
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
        },
        get_search_data(){
          return store.state.search_data
        }
      },
      computed:{
        userInfo(){
          return store.state.userInfo
        },

      },
      components: {Search_dropDown, UserDropMenu_m, NavButtons_m, UserIcon_a, NeoulWikiLogo_a, Search_m}
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
