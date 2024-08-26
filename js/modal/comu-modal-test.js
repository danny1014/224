
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.btn-open-modal');

btnOpenModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

const modalOk = document.querySelector('.btn-ok');
const btnOkmodal = document.querySelector('.btn-ok-modal');

btnOkmodal.addEventListener("click", () => {
  modal.style.display = "none";
});

const modalclose = document.querySelector('.btn-ok');
const btnclosemodal = document.querySelector('.btn-close-modal');

btnclosemodal.addEventListener("click", () => {
  modal.style.display = "none";
});
