//오류박스
const mailbox = document.querySelector("#e-mail");

//오류 메세지 창
const mailboxerror = document.querySelector(".join-e-mail-ch");
//이메일 정규표현식
const email_format = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

//실행할 함수
function emailCheck() {
  if(!mailbox.value || !email_format.test(mailbox.value)) {
    mailboxerror.style.display ="block";
    mailboxerror.innerText = "값을 입력해주세요";
    mailboxerror.style.color = "red";
    mailbox.style.border = "1px solid red";
  } else {
    mailboxerror.style.display = "none";
    mailbox.style.border="1px solid black";
  }
}

//실행 함수
mailbox.addEventListener("blur",emailCheck);



//비밀번호입력
const pwbox = document.querySelector("#join-pw");

//오류메세지창
const pwboxerror = document.querySelector(".join-pw-ch");
//비밀번호 정규표현식
const pw_format = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

//실행할 함수
function pwCheck(){
  if(!pwbox.value || !pw_format.test(pwbox.value)) {
    pwboxerror.style.display="block";
    pwboxerror.innerText = "비밀번호를 정확히 입력해주세요";
    pwboxerror.style.color="red";
    pwbox.style.border = "1px solid red";
  }else {
    pwboxerror.style.display ="none";
    pwbox.style.border ="1px solid black";
  }
}

//실행함수
pwbox.addEventListener("blur",pwCheck);

//비밀번호 확인
const pwboxOk = document.querySelector("#join-pw-one");

//오류메세지창
const pwOkerror =document.querySelector(".join-pw-ch-ok");

function pwCheckOk(){
  if(pwboxOk.value !== pwbox.value) {
    pwOkerror.style.display="block";
    pwOkerror.innerText = "비밀번호가 일치하지 않습니다";
    pwOkerror.style.color="red";
    pwboxOk.style.border = "1px solid red";
  }else{
    pwOkerror.style.display ="none";
    pwboxOk.style.border ="1px solid black";
  }
}

pwboxOk.addEventListener("blur",pwCheckOk);
