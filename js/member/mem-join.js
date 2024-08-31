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

// 전체 동의 시 모든 체크박스 체크
$("#mem-check-all").on('click', (e) => {
  const isChecked = e.target.checked;
  $("#mem-term .mem-term-checkbox-label input:checkbox").each(function() {
    $(this).prop("checked", isChecked);
  });
});

// 필수 체크박스 중 하나라도 해제 시 전체 동의 체크박스 해제
$("#mem-term").on('click', '#mem-check-e1, #mem-check-e2', function() {
  const requiredCheckboxes = $("#mem-check-e1, #mem-check-e2");
  $("#mem-check-all").prop("checked", requiredCheckboxes.length === requiredCheckboxes.filter(":checked").length);
});


// 체크박스 필수만 선택시 약관 동의될 수 있도록
$("#mem-check-e").on("click", (e) => {
  const requiredCheckboxes = $("#mem-check-e").slice(0, 2);
  // $(".terms-checkbox1").slice(0, 3)는 클래스가 terms-checkbox1인 체크박스들 중 첫 세 개(즉, 필수 항목)를 선택
  $("#mem-check-all").prop("checked", requiredCheckboxes.filter(":checked").length === 2);
});

// $(document).ready(function() {
//   $("#mem-term").on("click", "button", function(e) {
//       const requiredCheckboxes = $("#mem-check-e").slice(0, 2); // 필수 항목 선택
//       if (requiredCheckboxes.filter(":checked").length < 2) {
//           e.preventDefault(); // 폼 제출 막기
//           alert("필수 항목을 확인하고 체크해주세요.");
//       } else {
//           e.preventDefault(); // 폼 제출 막기
//           window.location.href = "../../"; // 경로 설정
//       }

// 버튼 클릭 시 필수 체크박스 확인
$(document).ready(function() {
  $("#mem-btn-next").on("click", function(e) {
    const requiredCheckboxes = $("#mem-check-e1, #mem-check-e2");
    if (requiredCheckboxes.filter(":checked").length < requiredCheckboxes.length) {
      e.preventDefault(); // 폼 제출 막기
      alert("필수 항목을 확인하고 체크해주세요.");
    } else {
      e.preventDefault(); // 폼 제출 막기
      openModal(); // 모달 열기
      // window.location.href = "../../"; // 페이지 이동 (원하는 동작에 맞게 조정)
    }
  });
});
