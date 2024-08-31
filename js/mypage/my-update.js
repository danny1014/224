// 새비밀번호값 가져오기
const newPW = document.querySelector("#my-newPW");
// 새비밀번호확인값 가져오기
const newPWC = document.querySelector("#my-newPWC");

// 경고메시지 출력창 정보
const pwResult = document.querySelector(".my-update-passCheck");

function updatePWCheck() {
  if(newPW.value !== newPWC.value || !newPW.value || !newPWC.value) {
    pwResult.style.display = "block";
    pwResult.innerText = "비밀번호를 정확히 입력해주세요";
    pwResult.style.color = "red";
    newPW.style.border = "2px solid red";
    newPWC.style.border = "2px solid red";
  } else {
    pwResult.style.display = "none";
    newPW.style.border = "1px solid black";
    newPWC.style.border = "1px solid black";
  };
};


newPW.addEventListener("blur", updatePWCheck);

newPWC.addEventListener("blur", updatePWCheck);



// 휴대전화인증버튼 클릭시 인증번호 입력창 출력
const phoneBtn = document.querySelector(".my-update-value-check2")
console.log(phoneBtn);
const checkbox = document.querySelector(".my-update-menu-check")

function phonecheckbox() {
  console.log("확인");
  checkbox.style.display = "block";
};

phoneBtn.addEventListener("click", phonecheckbox);