// "동의합니다" 텍스트박스 값 가져오기
const AgreeMsg = document.querySelector(".AgreeMsg");

// 경고메시지 출력창 정보
const AgreeResult = document.querySelector(".my-quit-result");

function AgreeMsgCheck() {
  if(!AgreeMsg.value || AgreeMsg.value !== "동의합니다") {
    AgreeResult.style.display = "block";
    AgreeResult.innerText = "잘못된 입력입니다";
    AgreeResult.style.color = "red";
    AgreeMsg.style.border = "1px solid red";
  } else {
    AgreeResult.style.display = "none";
    AgreeMsg.style.border = "1px solid gainsboro";
  };
};


AgreeMsg.addEventListener("blur", AgreeMsgCheck);
