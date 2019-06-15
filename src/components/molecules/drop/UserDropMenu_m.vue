<template>
  <div class="drop_menu_m" v-on:mouseleave="dropDown_false">
    <div class="drop_menu_info_m">
      <div class="drop_menu_user_icon_back">
        <span>이미지 변경</span>
      </div>
      <UserIcon_a v-bind:imgPath="userInfo.imgPath" id="drop_menu_user_icon"></UserIcon_a>
      <div class="drop_menu_info_history">
        <div class="dmui_history">히스토리</div>
      </div>
      <div class="drop_menu_user_info">
        <ul class="drop_menu_info_list">
          <div class="drop_menu_info_name">
            <div class="dmui_nik">
              {{userInfo.nikName}}
              <i v-if="userInfo.id !== '@guest'" class="icon-edit"></i>
            </div><!--닉네임-->
            <div class="dmui_id">{{userInfo.id}}</div><!--아이디-->
          </div>
          <div v-if="{disabled_content:userInfo.id === '@guest'}" class="disabled_content">
            <span>로그인 해주세요!</span>
          </div>
          <div class="drop_menu_info_contents" v-bind:class="{dmic_disabled:userInfo.id === '@guest'}">
            <div class="drop_menu_info_content">
              <div class="dmui_title">알림</div>
              <div class="dmui_data">{{userInfo.notice}}</div>
            </div>
            <div class="drop_menu_info_content">
              <div class="dmui_title">레벨</div>
              <div class="dmui_data">{{userInfo.level}}</div>
            </div>
            <div class="drop_menu_info_content">
              <div class="dmui_title">포인트</div>
              <div class="dmui_data">{{userInfo.point}}</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
    <div class="drop_menu_buttons">
      <div class="drop_menu_buttons_in">
        <div class="drop_menu_update_btn">
          <span>정보 수정</span>
        </div>
        <div class="drop_menu_logout_btn">
          <span v-if="userInfo.id !== '@guest'">로그아웃</span>
          <span v-if="userInfo.id === '@guest'">로그인</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import UserIcon_a from "../../atoms/icons/UserIcon_a";
    export default {
      props:['userInfo'],
      data(){
        return {
          imgPath: "../../../../static/img/user/content02.png"
        }
      },
        name: "UserDropMenu",
      components: {UserIcon_a},
      methods:{
        dropDown_false(){
          this.$emit('dropDown_false')
        }
      }
    }
</script>

<style scoped>
  .drop_menu_m{
    /*background-color: rgba(27, 149, 224, 0.1);*/
    border-radius: 3px;
    border: 1px solid #cccccc;
    box-shadow: 0px 0px 2px #999999;
    width: 300px;
    height: 180px;
    position: absolute;
    right: 0px;
    top: 45px;
    background: white;
    overflow: hidden;
    z-index: 90;
  }
  #drop_menu_user_icon{
    width: 100px;
    height: 100px;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }
  #drop_menu_user_icon:hover{
    opacity: 0.5;
  }
  .drop_menu_user_icon_back{
    background: black;
    width: 104px;
    height: 104px;
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 50%;
  }
  .drop_menu_user_icon_back > span{
    position: absolute;
    top: 42px;
    left: 10px;
    color: white;
  }
  .drop_menu_user_info{
    position: absolute;
    top: 16px;
    left: 125px;
  }
  .drop_menu_info_list{
    list-style: none;
    padding-left: 0px;
    margin: 0px;
  }
  .drop_menu_info_name{
    display: inline-block;
  }
  .dmui_nik{
    float: left;
    font-size: 16px;
    font-weight: bold;
    color: #005580;
    width: 160px;
    height: 21px;
    overflow: hidden;
    text-align: left;
    /*margin-top: -3px;*/
  }
  .dmui_id{
    float: left;
    color: #999999;
    font-size: 13px;
    display: flex;
  }
  .drop_menu_info_contents{
    margin-top: 10px;
    width: 150px;
    margin-left: 5px;
  }
  .drop_menu_info_content{
    display: contents;
    float: right;
    right: 0px;
    margin: 2px auto;
  }
  .dmui_title{
    float: left;
    font-size: 15px;
  }
  .dmui_history{
    float: left;
    font-size: 12px;
    color: #999999;
    cursor: pointer;
  }
  .dmui_data{
    line-height: 22px;
    color: #999999;
    margin-left: 20px;
    text-align: right;
  }

  .drop_menu_info_history{
    position: relative;
    left: 40px;
    top: 10px;
  }
  .drop_menu_info_email{
    font-size: 12px;
    color: #209cff;
    margin-top: -16px;
    margin-bottom: 5px;
    margin-left: 3px;
    position: absolute;
  }
  .drop_menu_buttons{
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0px;
    background: rgb(203, 240, 255);
    display: flex;
  }
  .drop_menu_buttons_in{
    width: 100%;
    height: 100%;
  }
  .drop_menu_buttons_in > div{
    cursor: pointer;
  }
  .drop_menu_update_btn{
    width: 49%;
    height: 40px;
    float: left;
    border-right: 1px solid #f3f3f3;
  }
  .drop_menu_update_btn:hover{
    background: rgb(226, 248, 255);
  }
  .drop_menu_update_btn > span {
    line-height: 40px;
    color: #005580;
  }
  .drop_menu_logout_btn{
    width: 50%;
    height: 40px;
    float: left;
  }
  .drop_menu_logout_btn:hover{
    background: rgb(226, 248, 255);
  }
  .drop_menu_logout_btn > span {
    line-height: 40px;
    color: #005580;
  }
  .disabled_content{
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 47px;
    left:0px;
    width: 165px;
    height: 70px;
    border-radius: 5px;
    cursor:pointer;
    z-index: 99;
  }
  .disabled_content > span {
    position: absolute;
    top: 25px;
    left: 20px;
    font-weight: bold;
    color: white;
  }
  .dmic_disabled {
    opacity: 0.3;
  }
</style>
