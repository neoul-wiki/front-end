<template>
  <div id="signup_o">
    <div id="signup_box">
      <div id="signup_wrapper">
        <div class="inputBox">
          <label for="">아이디</label>
          <input type="text" >
        </div>
        <div class="inputBox">
          <label for="">닉네임</label>
          <input type="text" >
        </div>
        <div class="inputBox">
          <label for="">비밀번호</label>
          <input type="password" >
        </div>
        <div class="inputBox">
          <label for="">비밀번호 확인</label>
          <input type="text" >
        </div>
        <div class="inputBox">
          <label for="">이메일</label>
          <input type="text" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>

<style scoped>
  #signup_o{
    margin-top: 45px;
    width: 100%;
    height: 600px;
    position: relative;
  }
  #signup_box{
    width: 900px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #cccccc;
  }
  #signup_wrapper{
    height: 100%;
    width: 80%;
    background: #68e0cf;
    margin: 0px auto;

  }
</style>
