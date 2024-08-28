const button = document.querySelector("button[type=button]");
console.log(button);
const id = document.querySelector("#id");
console.log(id);
const pw = document.querySelector("#pw");
console.log(pw);
const idResult = document.querySelector("#id-result");
console.log(idResult);
const pwResult = document.querySelector("#pw-result");
console.log(pwResult);

//id
button.addEventListener("click", () =>{
  console.log(id);
  if(!id.value){ 
    idResult.innerText = "필수 입력 항목입니다";
    idResult.style.color = "lightpink";
    idResult.style.transform = "translate(20px, -23px)";
    return;
  }
  idResult.style.color = "blue";
});
//pw
button.addEventListener("click", () =>{
  console.log(pw);
  if(!pw.value){ 
    pwResult.innerText = "필수 입력 항목입니다";
    pwResult.style.color = "lightpink"; 
    pwResult.style.transform = "translate(25px, -55px)";
    return; 
  }
  pwResult.style.color = "blue";
});