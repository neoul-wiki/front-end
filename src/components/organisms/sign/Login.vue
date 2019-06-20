<template>
  <div id="login_o">
    <div class="loginContainer">
      <div class="logoWrapper">
        <neoul-wiki-logo_a></neoul-wiki-logo_a>
      </div>
      <div class="inputWrapper">
        <input name="Id" id="inputId" type="text" autocomplete="off" required/>
        <label class="id_label no-drag" for="inputId" >ID</label>
      </div>
      <div class="inputWrapper">
        <input name="Pw" id="inputPw" type="password" autocomplete="off" required/>
        <label class="pw_label no-drag" for="inputPw">PASSWORD</label>
      </div>
      <div class="btnWrapper">
        <button type="button" onclick="loginAction(); return false;">LOGIN</button>
      </div>
    </div>
  </div>
</template>

<script>
    import NeoulWikiLogo_a from "../../atoms/logo/NeoulWikiLogo_a";
    export default {
        name: "Login",
      components: {NeoulWikiLogo_a}
    }
</script>

<style scoped>
  #login_o{
    width: 100%;
    min-height: 500px;
    position: relative;
    box-sizing: border-box;
    font-family: 'Do Hyeon', sans-serif;
    text-align: center;
  }
  .loginContainer{
    width: 314px;
    height: 240px;
    top: 50%;
    left: 50%;
    padding: 32px 32px 32px 32px;
    /*
        transform: translate(-50%, -50%);
       해당 컨테이너를 기준으로 왼쪽으로 해당 컨테이너의 50%만큼,
       위로 50%만큼 이동시킴
    */
    transform: translate(-50%, -50%);
    border-radius: 5px; /* 모서리 둥글게 */
    background: white;
    position: absolute;
    box-sizing: content-box;
    box-shadow: -30px 0px 80px -90px #000000,
    30px 0px 80px -90px #000000;
  }
  .inputWrapper{
    margin-bottom: 40px;
    width: 100%;
    position: relative;
  }
  .inputWrapper > input{
    width: 90%;
    font-size: 18pt;
    text-indent: 3px;
    outline: none;
    position: relative;
    display: inline;
    background: white;
    line-height: 44px;
    padding: 0px 20px;
    border-radius: 15px;
    border:1px solid white;
    transition: 0.1s all ease;
  }
  /* 트렌지션 대상 시간 이지인*/
  .inputWrapper >input:focus ~ label{
    transform: translateY(-18px);
    font-size: 14px;
    line-height: 22px;
    width: 150px;
    top:-1px;
    left: 10px;
    border: 0px;
    transition: 0.1s all ease;
  }
  .inputWrapper >input:focus ~ .id_label{
    width: 50px;
  }
  .inputWrapper >input:focus ~ .pw_label{
    width: 130px;
  }
  .inputWrapper >input:focus{
    border: 1px solid #cccccc;
  }
  .inputWrapper >input:valid ~ label{
    transition: all 0.1s ease;
    transform: translateY(-25px);
    font-size: 14px;
    top:-1px;
    left: 10px;
    width: 150px;
    line-height: 22px;
    border: 0px;
  }
  .inputWrapper >input:valid ~ .id_label{
    width: 50px;
  }
  .inputWrapper >input:valid ~ .pw_label{
    width: 130px;
  }

  .inputWrapper >input:valid{
    border: 1px solid #68e0cf;
  }
  .inputWrapper >input:invalid ~ label{
    transition: all 0.2s ease;
  }

  .inputWrapper > label{
    line-height: 34px;
    font-size: 18px;
    top: 0px;
    left: 0px;
    /*margin-left: 5px;*/
    display: inline;
    position: absolute;
    background: white;
    border: 1px solid #cccccc;
    border-radius: 15px;
    width: 100%;
    padding: 5px;
    letter-spacing: 4px;
    cursor: pointer;
  }
  .inputWrapper > label:hover{
    border: 1px solid #68e0cf;
    transition: 0.5s all ease;
  }
  .btnWrapper{
    width: 90%;
    height: 50px;
    margin: 0px auto;
  }
  .btnWrapper > button{
    border: 0;
    outline: none;
    width: 100%;
    margin: 0px auto;
    line-height: 50px;
    cursor: pointer;
    background: #209cff;
    font-size: 18px;
    color: #ffffff;
    border-radius: 15px;
    transition: 0.2s all ease;
    letter-spacing: 5px;
  }
  .btnWrapper >button:hover{
    background: #0088cc;
    letter-spacing: 15px;
    padding-left: 8px;
  }
  .logoWrapper{
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: #333333;
  }
  .no-drag {
    -ms-user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    user-select:none;
  }
  #inputId{
    letter-spacing: 4px;
  }
  #inputPw{
    letter-spacing: 13px;
  }
  .id_label{

  }
  .pw_label{

  }
</style>

