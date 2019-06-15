<template>
  <div class="navButtons navButtons_all">
      <div class="navButton_out navButtons_all" v-bind:class="{selected_navButton:btn1}" @click="selected(0)">
        <div class="navButton_in">
          <div class="navButton_icon navButtons_all">
            <i class="icon-doc-text-inv"></i>
          </div>
          <div class="navButton_text navButtons_all">
            <label class="no-drag">문서</label>
          </div>
        </div>
      </div>
      <div class="navButton_out navButtons_all" v-bind:class="{selected_navButton:btn2}" @click="selected(1)">
        <div class="navButton_in">
          <div class="navButton_icon navButtons_all">
            <i class="icon-clipboard"></i>
          </div>
          <div class="navButton_text navButtons_all">
            <label class="no-drag">게시판</label>
          </div>
        </div>
      </div>
      <div class="navButton_out navButtons_all" v-bind:class="{selected_navButton:btn3}" @click="selected(2)">
        <div class="navButton_in">
          <div class="navButton_icon navButtons_all">
            <i class="icon-users"></i>
          </div>
          <div class="navButton_text navButtons_all">
            <label class="no-drag">토론</label>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

  import Vue from "vue"
  import Vuex from "vuex"

  Vue.use(Vuex)

    export default {
        name: "NavButtons",
      data(){
        return {
        }
      },
      computed:{
        btn1(){
          return store.state.btn1
        },
        btn2(){
          return store.state.btn2
        },
        btn3(){
          return store.state.btn3
        },
      },
      methods:{
        selected(num){
          switch (num) {
            case 0:
              store.commit('btn1_select');
              break
            case 1:
              store.commit('btn2_select');
              break
            case 2:
              store.commit('btn3_select');
          }
        }
      }
    }
    const store = new Vuex.Store({
      state: {
        btn1: true,
        btn2: false,
        btn3: false
      },
      mutations:{
        btn1_select:state => {
          state.btn1 = true
          state.btn2 = false
          state.btn3 = false
        },
        btn2_select:state => {
          state.btn1 = false
          state.btn2 = true
          state.btn3 = false
        },
        btn3_select:state => {
          state.btn1 = false
          state.btn2 = false
          state.btn3 = true
        }
      }
    })
</script>

<style scoped>

  .navButtons{
    margin-top: 5px;
    margin-right: 10px;
  }
  .navButton_out{
    width: 80px;
    height: 40px;
    margin-left: 5px;
    border-radius: 5px 5px 0px 0px;
    color: white;
    transition: all 0.2s ease;
    cursor: pointer;
    /*text-shadow: 0px 0px 2px black;*/
  }
  .navButton_out:hover{
    font-weight: bold;
    background: rgba(255,255,255,0.5);
  }
  .navButton_text{
    font-size: 13px;
    margin-left: 5px;
  }
  .navButton_in{
    line-height: 35px;
    display: inline-block;
    margin: 0px auto;
  }
  .navButtons_all{
    float: left;
  }
  .selected_navButton{
    background: white;
    color: #209cff;
    font-weight: bold;
  }
  .no-drag {
    cursor: pointer;
    -ms-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
  @media (max-width: 900px) {
    .navButton_text{
      display: none;
    }
    .navButton_out{
      width: 40px;
    }
  }
</style>
