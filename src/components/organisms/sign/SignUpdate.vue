<template>
  <div id="signupdate_o">
    <div id="signup_box">
      <div id="signup_wrapper">
        <div id="signup_wrapper_in">
          <div id="signup_title">
            <h2>정보 수정</h2>
          </div>
          <div class="inputBox">
            <label >아이디</label>
            <label class="" id="ib_id">pollra</label>
          </div>
          <span class="explanation" id="id_ex">로그인할때 사용되는 아이디입니다.<br/> 수정이 불가능합니다.</span>
          <div class="inputBox">
            <label for="ib_nik">닉네임</label>
            <input type="text" id="ib_nik" class="ib_notEml" required="required" @keyup="nik()">
            <div class="updateBtn">변경</div>
          </div>
          <span class="explanation" id="nik_ex">글을쓰거나 활동을 할때 다른 유저들에게 보여줄 이름입니다.</span>
          <div class="passwordUpdateBox">
            <div class="inputBox">
              <label for="ib_pw">비밀번호</label>
              <input type="password" class="ib_notEml" id="ib_pw" required="required" @keyup="pwd();pwdCheck()" @focus="pwdCheck">
              <div class="updateBtn">변경</div>
            </div>
            <span class="explanation" id="pw_ex">로그인할때 사용할 비밀번호입니다.</span>
            <div class="inputBox">
              <label for="ib_pwck">비밀번호 확인</label>
              <input type="password" class="ib_notEml" id="ib_pwck" required="required" @keyup="pwdCheck">
              <div class="updateBtn">변경</div>
            </div>
            <span class="explanation" id="pwck_ex">위의 비밀번호와 똑같은 텍스트를 입력해주세요.</span>
          </div>
          <div class="inputBox">
            <label for="ib_eml">이메일</label>
            <input type="text" class="ib_notEml" id="ib_eml" required="required" @keyup="emlCheck">
            <div class="updateBtn">변경</div>
          </div>
          <span class="explanation" id="eml_ex">이메일 인증을 위한 입력란입니다. <br/>이메일 인증을 하지 않으면 글쓰기 및 게시글 작성 권한이 없습니다.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "SignUpdate",
      data(){
        return {
        }
      },
      methods:{
        idValuePw(target_id,target_pw) {

          let validid = target_id;
          let validpw = target_pw;
          let tmp = "";
          let cnt = 0;
          for (let i = 0; i < validid.length - 2; i++) {
            tmp = validid.charAt(i) + validid.charAt(i + 1) + validid.charAt(i + 2);
            if (validpw.indexOf(tmp) > -1) {
              cnt = cnt + 1;
            }
          }
          if (cnt > 0) {
            return true;
          } else {
            return false;
          }
        },
        // "타겟에 \"" + srt + "\" 라는 문자는 사용할 수 없습니다."
        pwInputValueCheck(target) {  //특정문자 체크
          const InputValue = ["love", "happy", "qwer", "asdf", "zxcv", "test", "gpin", "ipin"];

          let validpw = target;
          for (let i = 0; i < InputValue.length; i++) {
            if (validpw.indexOf(InputValue[i]) >= 0) {
              return InputValue[i];
            }
          }
          return null;
        },
        // aInputBox에 있는 숫자의 갯수 return
        IntCount(aInputBox) {
          const comp = "1234567890";
          let aInputBoxValue = aInputBox;
          let len = aInputBoxValue.length;
          let count = 0;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              if (comp.indexOf(aInputBoxValue.substring(i, i + 1)) != -1) {
                count++;
              }
            }
          }
          return count;
        },
        // aInputBox에 있는 문자의 갯수 return
        CharCount(aInputBox) {
          const comp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let aInputBoxValue = aInputBox;
          let len = aInputBoxValue.length;
          let count = 0;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              if (comp.indexOf(aInputBoxValue.substring(i, i + 1)) != -1) {
                count++;
              }
            }
          }
          return count;
        },
        // aInputBox에 있는 특수문자의 갯수 return
        VarCharCount(aInputBox) {
          const comp = "\`~!@#$%^&*-_+=\\,./?:;\"{[}]";
          let aInputBoxValue = aInputBox;
          let len = aInputBoxValue.length;
          let count = 0;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              if (comp.indexOf(aInputBoxValue.substring(i, i + 1)) != -1) {
                count++;
              }
            }
          }
          return count;
        },
        // 이메일 유효성검사. 유효성검사 통과 시 false 리턴.
        emailCheck( email ) {
          const regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
          return !(email != '' && email != 'undefined' && regex.test(email));
        },
      }
    }
</script>

<style scoped>
  #signupdate_o{
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
  }
  #signup_wrapper{
    height: 450px;
    width: 80%;
    margin: 0px auto;
  }
  #signup_wrapper_in{
    position: relative;
    top: 0px;
  }
  .inputBox{
    width: 400px;
    margin: 10px auto 5px auto;
    display: flex;
  }
  .inputBox > input{
    font-size: 16px;
    line-height: 24px;
    border: 2px solid #cccccc;
    border-radius: 5px;
  }
  .necessary:invalid{
    border:2px solid lightcoral;
  }
  .ib_notEml:valid{
    border: 2px solid #209cff;
    float: left;
  }
  /*#ib_eml{*/
  /*  border: 2px solid #209cff;*/
  /*}*/
  /*#ib_eml:valid{*/
  /*  border:2px solid #cccccc;*/
  /*}*/
  .inputBox > label {
    display: inline-block;
    width: 120px;
    text-align: left;
  }
  .explanation{
    color: #999999;
    margin-bottom: 15px;
    display: inline-block;
  }
  #signup_btn{
    width: 80%;
    height: 40px;
    margin: 20px auto 0px auto;
    background-color: #0088cc;
    color: white;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 15px;
    padding: 15px 0px 0px 20px;
    border-radius: 15px;
    cursor: pointer;
  }
  #signup_btn:hover{
    background: #209cff;
  }
  #signup_title{
    margin: 20px 0px 40px 0px;
    letter-spacing: 15px;
  }
  .ex_ok{
    color: #209cff;
  }
  .ex_no{
    color: lightcoral;
  }

  .updateBtn {
    width: 50px;
    padding: 5px 15px;
    background: skyblue;
    margin-left: 15px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    letter-spacing: 3px;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .updateBtn:hover {
    background: #0088cc;
  }
  .passwordUpdateBox{
    border-radius: 5px;
    border: 1px solid #0088cc;
    width: 60%;
    height: 160px;
    margin: 0px auto;
  }
</style>
