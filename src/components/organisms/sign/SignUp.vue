<template>
  <div id="signup_o">
    <div id="signup_box">
      <div id="signup_wrapper">
        <div id="signup_wrapper_in">
          <div id="signup_title">
            <h2>회원가입</h2>
          </div>
          <div class="inputBox">
            <label for="ib_id">아이디</label>
            <input type="text" class="necessary ib_notEml" id="ib_id" autocomplete="off" required="required" @focusout="idCheck">
          </div>
          <span class="explanation" id="id_ex">로그인할때 사용할 아이디입니다.</span>
          <div class="inputBox">
            <label for="ib_nik">닉네임</label>
            <input type="text" id="ib_nik" class="ib_notEml" required="required" @focusout="nikCheck">
          </div>
          <span class="explanation" id="nik_ex">글을쓰거나 활동을 할때 남들에게 보여줄 이름입니다.<br/> 이 창을 비워두시면 아이디가 닉네임이 됩니다.</span>
          <div class="inputBox">
            <label for="ib_pw">비밀번호</label>
            <input type="password" class="necessary ib_notEml" id="ib_pw" required="required">
          </div>
          <span class="explanation" id="pw_ex">로그인할때 사용할 비밀번호입니다.</span>
          <div class="inputBox">
            <label for="ib_pwck">비밀번호 확인</label>
            <input type="password"class="necessary ib_notEml" id="ib_pwck" required="required">
          </div>
          <span class="explanation" id="pwck_ex">위의 비밀번호와 똑같은 텍스트를 입력해주세요.</span>
          <div class="inputBox">
            <label for="ib_eml">이메일</label>
            <input type="email" id="ib_eml">
          </div>
          <span class="explanation" id="eml_ex">이메일 인증을 위한 입력란입니다. <br/>이메일 인증을 하지 않으면 글쓰기 및 게시글 작성 권한이 없습니다.</span>
          <div id="signup_btn" @click="submitForm">회원가입</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {

        }
      },
      name: "SignUp",
      methods: {
        // 닉네임 체크
        nikCheck(){
          let target_ex = document.getElementById("nik_ex");
          let target = document.getElementById("ib_nik");

          let axiosResult = 0;
          if(target.value.length < 2 || target.value.length > 10){
            target_ex.innerText = "닉네임은 2자 이상, 10자 이하여야 합니다."
            target_ex.classList = "explanation ex_no";
            return;
          }
          if(axiosResult > 0){
            // 사용 불가
            target_ex.innerText = "이미 사용중인 닉네임 입니다."
            target_ex.classList = "explanation ex_no";
          }else if(axiosResult === 0){
            console.log("닉네임 체크 테스트 무조건 false(중복없음)");
            target_ex.innerText = "사용 가능한 닉네임 입니다."
            target_ex.classList = "explanation ex_ok";
          }else{
            console.log("데이터 처리 오류.")
          }
        },
        // 아이디 체크
        // 4~20자 영문, 숫자(선택적)만 사용할 수 있음.
        idCheck(){
          let target_ex = document.getElementById("id_ex");
          let target = document.getElementById("ib_id");

          let axiosResult = 0;
          if(target.value.length < 4 || target.value.length > 20){
            target_ex.innerText = "아이디는 4자 이상, 20자 이하 영문및 숫자로 구성되어야 합니다."
            target_ex.classList = "explanation ex_no";
            return;
          }
          if(axiosResult > 0){
            // 사용 불가
            target_ex.innerText = "이미 사용중인 아이디 입니다."
            target_ex.classList = "explanation ex_no";
          }else if(axiosResult === 0){
            console.log("아이디 체크 테스트 무조건 false(중복없음)");
            target_ex.innerText = "사용 가능한 아이디 입니다."
            target_ex.classList = "explanation ex_ok";
          }else{
            console.log("데이터 처리 오류.")
          }
        },
        submitForm() {
          const srt = this.pwInputValueCheck();
          const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

          let target_pw = document.getElementById("ib_pw");
          let target_pwck = document.getElementById("ib_pwck");
          let target_id = document.getElementById("ib_id");

          if (target_id.value == "") {
            alert("아이디를 입력해주세요");
            target_pw.focus();
            return;
          }

          if (target_pw.value == "" && target_pwck.value == "") {

          } else {
            if (target_pw.value === "") {
              alert("비밀번호를 입력해 주세요.");
              target_pw.focus();
              return;
            } else if (target_pwck.value == "") {
              alert("비밀번호 확인을 입력해 주세요.");
              target_pwck.focus();
              return;
            } else if (target_pw.value.length < 8 || target_pw.value.length > 20) {
              alert('비밀번호는 8자 이상 20자 이내로 입력하여 주십시오')
              target_pw.focus();
              return;
            } else if (this.pwcheck()) {
              alert("비밀번호에 허용되지 않는 특수문자(<, >, (, ), #, ', /, |)가 있습니다.");
              target_pw.focus();
              return;
            } else if (this.checkPwdEnd()) {
              alert('비밀번호는 영문, 숫자, 특수문자의 조합으로 구성되어야 하며\n최소 1자리 이상의 특수문자가 포함되어야 합니다')
              target_pw.focus();
              return;
            } else if (this.pwContinue()) {
              alert("비밀번호에 3자리 이상 연속된 문자(예:abc)는 사용할 수 없습니다.");
              target_pw.focus();
              return;
            } else if (this.pwSame()) {
              alert("비밀번호에 3자리 이상 연속된 동일한 문자(예:aaa)는 사용할 수 없습니다.");
              target_pw.focus();
              return;
            } else if (this.idValuePw()) {
              alert("비밀번호가 아이디와 동일하거나 3자리 이상 일치할 경우 사용할 수 없습니다.");
              target_pw.focus();
              return;
            } else if (srt != null) {
              alert("비밀번호에 \"" + srt + "\" 라는 문자는 사용할 수 없습니다.");
              target_pw.focus();
              return;
            } else if (target_pw.value == target_id.value) {
              alert('비밀번호는 아이디와 동일할 수 없습니다')
              target_pw.value = "";
              target_pwck.value = "";
              target_pw.focus();
              return;
            } else if (target_pw.value != target_pwck.value) {
              alert('비밀번호와\n비밀번호 확인이\n맞지않습니다')
              target_pw.value = "";
              target_pwck.value = "";
              target_pw.focus();
              return;
            } else if (target_pw.value == target_pw.value) {
              alert('현재 비밀번호와 변경 비밀번호가 동일합니다.')
              target_pw.value = "";
              target_pwck.value = "";
              target_pw.focus();
              return;
            }
          }

        },
        // 비밀번호에 허용되지 않는 특수문자(<, >, (, ), #, ', /, |)가 있습니다.
        pwcheck() {
          let digits = "\`~!@$%^&*-=\\_+,.?;:\"[]{}0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let j = 0;

          let target_pw = document.getElementById("ib_pw");

          let valpw = target_pw.value;

          for (let i = 0; i < valpw.length; i++) {
            if (digits.indexOf(valpw.charAt(i)) < 0) {
              j = j + 1;
            }
          }
          if (j > 0) {
            return true;
          }
          return false;
        },
        // 비밀번호는 영문, 숫자, 특수문자의 조합으로 구성되어야 하며\n최소 1자리 이상의 특수문자가 포함되어야 합니다
        checkPwdEnd() {
          let target_pw = document.getElementById("ib_pw");

          let flag = false;
          let intCount = 0;
          let charCount = 0;
          let varcharCount = 0;
          intCount = this.IntCount(target_pw.value);
          charCount = this.CharCount(target_pw.value);
          varcharCount = this.VarCharCount(target_pw.value);
          if ((intCount == 0 || charCount == 0 || varcharCount == 0)) {
            flag = true;
          }
          return flag;
        },
        // 비밀번호에 3자리 이상 연속된 문자(예:abc)는 사용할 수 없습니다.
        pwContinue() {   //연속된 문자, 숫자 체크(3자리)

          let target_pw = document.getElementById("ib_pw");

          let cnt = 0;
          let cnt2 = 0;
          let tmp = "";
          let tmp2 = "";
          let tmp3 = "";
          let validpw = target_pw.value;
          for (i = 0; i < validpw.length; i++) {
            tmp = validpw.charAt(i);
            tmp2 = validpw.charAt(i + 1);
            tmp3 = validpw.charAt(i + 2);

            if (tmp.charCodeAt(0) - tmp2.charCodeAt(0) == 1 && tmp2.charCodeAt(0) - tmp3.charCodeAt(0) == 1) {
              cnt = cnt + 1;
            }
            if (tmp.charCodeAt(0) - tmp2.charCodeAt(0) == -1 && tmp2.charCodeAt(0) - tmp3.charCodeAt(0) == -1) {
              cnt2 = cnt2 + 1;
            }
          }
          if (cnt > 0 || cnt2 > 0) {
            return true;
          } else {
            return false;
          }
        },
        // 비밀번호에 3자리 이상 연속된 동일한 문자(예:aaa)는 사용할 수 없습니다.
        pwSame() {   //동일 문자, 숫자 체크(3자리)
          let target_pw = document.getElementById("ib_pw");

          let tmp = "";
          let cnt = 0;
          let validpw = target_pw.value;
          for (let i = 0; i < validpw.length; i++) {
            tmp = validpw.charAt(i);
            if (tmp == validpw.charAt(i + 1) && tmp == validpw.charAt(i + 2)) {
              cnt = cnt + 1;
            }
          }
          if (cnt > 0) {
            return true;
          } else {
            return false;
          }
        },
        // 비밀번호가 아이디와 동일하거나 3자리 이상 일치할 경우 사용할 수 없습니다.
        idValuePw() {
          let target_pw = document.getElementById("ib_pw");
          let target_id = document.getElementById("ib_id");

          let validid = target_id.value;
          let validpw = target_pw.value;
          let tmp = "";
          let cnt = 0;
          for (i = 0; i < validid.length - 2; i++) {
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
        // "비밀번호에 \"" + srt + "\" 라는 문자는 사용할 수 없습니다."
        pwInputValueCheck() {  //특정문자 체크
          let InputValue = ["love", "happy", "qwer", "asdf", "zxcv", "test", "gpin", "ipin"];
          let target_pw = document.getElementById("ib_pw");

          let validpw = target_pw.value;
          for (let i = 0; i < InputValue.length; i++) {
            if (validpw.indexOf(InputValue[i]) >= 0) {
              return InputValue[i];
            }
          }
          return null;
        },
        IntCount(aInputBox) {  // aInputBox에 있는 숫자의 갯수 return
          let comp = "1234567890";
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
        CharCount(aInputBox) {  // aInputBox에 있는 문자의 갯수 return
          let comp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
        VarCharCount(aInputBox) {  // aInputBox에 있는 특수문자의 갯수 return
          let comp = "\`~!@#$%^&*-_+=\\,./?:;\"{[}]";
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
      }
    }
</script>

<style scoped>
  #signup_o{
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
    margin: 20px auto 5px auto;
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
  }
  #ib_eml{
    border: 2px solid #209cff;
  }
  #ib_eml:valid{
    border:2px solid #cccccc;
  }
  .inputBox > label {
    display: inline-block;
    width: 120px;
    text-align: left;
  }
  .explanation{
    color: #999999;
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
</style>
