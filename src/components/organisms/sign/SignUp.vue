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
            <input type="text" class="necessary ib_notEml" id="ib_id" autocomplete="off" required="required" @keyup="id()">
          </div>
          <span class="explanation" id="id_ex">로그인할때 사용할 아이디입니다.</span>
          <div class="inputBox">
            <label for="ib_nik">닉네임</label>
            <input type="text" id="ib_nik" class="ib_notEml" required="required" @keyup="nik()">
          </div>
          <span class="explanation" id="nik_ex">글을쓰거나 활동을 할때 남들에게 보여줄 이름입니다.<br/> 이 창을 비워두시면 아이디가 닉네임이 됩니다.</span>
          <div class="inputBox">
            <label for="ib_pw">비밀번호</label>
            <input type="password" class="necessary ib_notEml" id="ib_pw" required="required" @keyup="pwd();pwdCheck()" @focus="pwdCheck">
          </div>
          <span class="explanation" id="pw_ex">로그인할때 사용할 비밀번호입니다.</span>
          <div class="inputBox">
            <label for="ib_pwck">비밀번호 확인</label>
            <input type="password" class="necessary ib_notEml" id="ib_pwck" required="required" @keyup="pwdCheck">
          </div>
          <span class="explanation" id="pwck_ex">위의 비밀번호와 똑같은 텍스트를 입력해주세요.</span>
          <div class="inputBox">
            <label for="ib_eml">이메일</label>
            <input type="text" class="ib_notEml" id="ib_eml" required="required" @keyup="emlCheck">
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
          // 0: 없음 / 1: 있는데 데이터 이상함 / 2: 데이터 유효성 ㅇ
          _idCheck:0,
          _nikCheck:0,
          _pwCheck:0,
          _pwckCheck:0,
          _emlCheck:0
        }
      },
      name: "SignUp",
      methods: {
        id(){
          let target_ex = document.getElementById("id_ex");
          let target = document.getElementById("ib_id");

          let srt = this.pwInputValueCheck(target.value);

          let exText = "";

          let axiosResult = 0;
          if(target.value === ""
            || target.value === undefined
            || target.value === " "
            || target.value === null){
            exText = "아이디를 입력해주세요.";
            this._idCheck = 0;
            target.value = ""
            target_ex.innerText = exText;
            target_ex.classList = "explanation ex_no";
            return;
          }
          else if(srt !== null){
            exText = "아이디에 \"" + srt + "\" 라는 문자는 사용할 수 없습니다.";
            target_ex.innerText = exText;
            target_ex.classList = "explanation ex_no";
            this._idCheck = 1;
            return;
          }
          else if(target.value.length < 4 || target.value.length > 20){
            exText = "아이디는 4자 이상, 20자 이하 영문및 숫자로 구성되어야 합니다.";
            target_ex.innerText = exText;
            target_ex.classList = "explanation ex_no";
            this._idCheck = 1;
            return;
          }
          if(axiosResult > 0){
            // 사용 불가
            exText = "이미 사용중인 아이디 입니다.";
            this._idCheck = 1;
            target_ex.innerText = exText
            target_ex.classList = "explanation ex_no";
          }else if(axiosResult === 0){
            console.log("아이디 체크 테스트 무조건 false(중복없음)");
            exText = "사용 가능한 아이디 입니다.";
            this._idCheck = 2;
            target_ex.innerText = exText
            target_ex.classList = "explanation ex_ok";
          }else{
            this._idCheck = 1;
            exText = "데이터 처리 오류.";
            console.log("데이터 처리 오류.")
          }
        },//id()
        // 닉네임 체크
        nik(){
          let target_ex = document.getElementById("nik_ex");
          let target = document.getElementById("ib_nik");
          console.log("target.value: "+target.value);
          let srt = this.pwInputValueCheck(target.value);
          let axiosResult = 0;
          if(target.value === ""
            || target.value === undefined
            || target.value === " "
            || target.value === null){
            target = "";
            this._nikCheck = 0;
            return;
          }
          else if(srt !== null){
            target_ex.innerText = "닉네임에 \"" + srt + "\" 라는 문자는 사용할 수 없습니다."
            target_ex.classList = "explanation ex_no";
            this._nikCheck = 1;
            return;
          }
          else if(this.pwcheck(target.value)){
            target_ex.innerText = "닉네임에 허용되지 않는 특수문자(<, >, (, ), #, ', /, |)가 있습니다."
            target_ex.classList = "explanation ex_no";
            this._nikCheck = 1;
            return;
          }
          else if(target.value.length < 2 || target.value.length > 10){
            target_ex.innerText = "닉네임은 2자 이상, 10자 이하 영문, 한글, 숫자 등으로 구성되어야 합니다."
            target_ex.classList = "explanation ex_no";
            this._nikCheck = 1;
            return;
          }
          if(axiosResult > 0){
            // 사용 불가
            target_ex.innerText = "이미 사용중인 닉네임 입니다."
            target_ex.classList = "explanation ex_no";
            this._nikCheck = 1;
          }else if(axiosResult === 0){
            console.log("닉네임 체크 테스트 무조건 false(중복없음)");
            this._nikCheck = 2;
            target_ex.innerText = "사용 가능한 닉네임 입니다."
            target_ex.classList = "explanation ex_ok";
          }else{
            console.log("데이터 처리 오류.")
            this._nikCheck = 1;
          }
        },//nik()
        // 비밀번호 체크
        pwd(){
          let target_id = document.getElementById("ib_id");
          let target_pw = document.getElementById("ib_pw");
          let target_ex = document.getElementById("pw_ex");

          if (target_pw.value === "") {
            // 입력창이 비워져있을땐 아무것도 안함.
            this._pwCheck = 0;
          } else {
            if (target_pw.value === ""
              || target_pw.value === undefined
              || target_pw.value === " "
              || target_pw.value === null) {
              target_pw.value = "";
              this._pwCheck = 0;
              target_ex.innerText = "비밀번호를 입력해주세요.";
              target_ex.classList = "explanation ex_no";
              return false;
            } else if (target_pw.value.length < 8 || target_pw.value.length > 20) {
              this._pwCheck = 1;
              target_ex.innerText = "비밀번호는 8자 이상 20자 이내로 입력하여 주십시오";
              target_ex.classList = "explanation ex_no";
              return false;
            } else if (this.pwcheck(target_pw.value)) {
              this._pwCheck = 1;
              target_ex.innerText = "비밀번호에 허용되지 않는 특수문자(<, >, (, ), #, ', /, |)가 있습니다.";
              target_ex.classList = "explanation ex_no";
              return false;
            } else if (this.checkPwdEnd(target_pw.value)) {
              this._pwCheck = 1;
              target_ex.innerText = "비밀번호는 영문, 숫자, 특수문자의 조합으로 구성되어야 하며\n최소 1자리 이상의 특수문자가 포함되어야 합니다";
              target_ex.classList = "explanation ex_no";
              return false;
            } else if (this.idValuePw(target_id.value, target_pw.value)) {
              this._pwCheck = 1;
              target_ex.innerText = "비밀번호가 아이디와 동일하거나 3자리 이상 일치할 경우 사용할 수 없습니다.";
              target_ex.classList = "explanation ex_no";
              return false;
            } else {
              this._pwCheck = 2;
              target_ex.innerText = "사용 가능한 비밀번호입니다.";
              target_ex.classList = "explanation ex_ok";
            }
          }
        },//pwd()
        // 비밀번호 확인 체크
        pwdCheck(){
          let target_pw = document.getElementById("ib_pw");
          let target_pwck = document.getElementById("ib_pwck");
          let target_ex = document.getElementById("pwck_ex");

          if(target_pwck.value === ""){
            this._pwckCheck = 0;
            target_ex.innerText = "위의 비밀번호와 똑같은 텍스트를 입력해주세요."
            target_ex.classList = "explanation";
          }
          else if(target_pw.value === target_pwck.value){
            this._pwckCheck = 2;
            target_ex.innerText = "비밀번호가 일치합니다."
            target_ex.classList = "explanation ex_ok";
            return;
          } else{
            this._pwckCheck = 1;
            target_ex.innerText = "비밀번호가 일치하지 않습니다."
            target_ex.classList = "explanation ex_no";
            return;
          }
        },//pwdCheck()
        // 이메일 유효성 체크
        emlCheck(){
          let target = document.getElementById("ib_eml");
          let target_ex = document.getElementById("eml_ex");
          if(target.value === ""){
            this._emlCheck = 0;
          }
          else if(this.emailCheck(target.value)){
            this._emlCheck = 1;
            target_ex.innerText = "이메일 형식이 올바르지 않습니다."
            target_ex.classList = "explanation ex_no";
            return;
          }
          else{
            this._emlCheck = 2;
            target_ex.innerText = "사용할 수 있는 이메일 형식입니다."
            target_ex.classList = "explanation ex_ok";
            return;
          }
        },// emailCheck()
        // 회원가입 버튼 눌렀을때 체크
        submitForm() {
          let target_id = document.getElementById("ib_id");
          let target_pw = document.getElementById("ib_pw");
          let target_pwck = document.getElementById("ib_pwck");
          let target_nik = document.getElementById("ib_nik");
          let target_eml = document.getElementById("ib_eml");

          if (target_id.value === ""
            || target_id.value === undefined
            || target_id.value === " "
            || target_id.value === null) {
            alert("아이디를 입력해주세요.");
            target_id.focus();
            return;
          } else if (this._idCheck === 1) {
            alert("아이디가 올바르지 않습니다.");
            target_id.focus();
            return;
          }
          else if (target_pw.value === ""
            || target_pw.value === undefined
            || target_pw.value === " "
            || target_pw.value === null) {
            alert("비밀번호를 입력해 주세요.");
            target_pw.focus();
            return;
          } else if (this._pwCheck === 1) {
            alert("비밀번호가 올바르지 않습니다.");
            target_pw.focus();
            return;
          }
          else if (target_pwck.value === ""
            || target_pwck.value === undefined
            || target_pwck.value === " "
            || target_pwck.value === null) {
            alert("비밀번호 확인을 입력해 주세요.");
            target_pwck.focus();
            return;
          } else if (this._pwckCheck === 1) {
            alert("비밀번호 확인이 올바르지 않습니다.");
            target_pwck.focus();
            return;
          }
          else if (this._nikCheck === 1) {
            alert("닉네임이 지정된 서식에 맞지 않습니다.");
            target_nik.focus();
            return;
          }
          else if (this._emlCheck === 1) {
            alert("이메일이 지정된 서식에 맞지 않습니다.");
            target_eml.focus();
            return;
          }

        },
        // 0 들어온 데이터가 Null 이면 true 를 리턴.
        nullCheck(value){
          if(value === "" || value === undefined || value === null){
            return true;
          }
          return false;
        },
        // target 에 허용되지 않는 특수문자(<, >, (, ), #, ', /, |)가 있습니다.
        // 특수문자 있을 시 true
        pwcheck(target) {
          const digits = "\`~!@$%^&*-=\\_+,.?;:\"[]{}0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let j = 0;

          let valpw = target;

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
        // 특문이 하나도 없으면 true (있어야함)
        checkPwdEnd(target) {

          let flag = false;
          let intCount = 0;
          let charCount = 0;
          let varcharCount = 0;
          intCount = this.IntCount(target);
          charCount = this.CharCount(target);
          varcharCount = this.VarCharCount(target);
          if ((intCount == 0 || charCount == 0 || varcharCount == 0)) {
            flag = true;
          }
          return flag;
        },
        // 비밀번호에 3자리 이상 연속된 문자(예:abc)는 사용할 수 없습니다.
        pwContinue(target) {   //연속된 문자, 숫자 체크(3자리)

          let cnt = 0;
          let cnt2 = 0;
          let tmp = "";
          let tmp2 = "";
          let tmp3 = "";
          let validpw = target;
          for (let i = 0; i < validpw.length; i++) {
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
        pwSame(target) {   //동일 문자, 숫자 체크(3자리)
          let tmp = "";
          let cnt = 0;
          let validpw = target;
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
      },
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
