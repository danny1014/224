document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const usernameBorder = document.querySelector('#username ~ .login-input-border');
  const passwordBorder = document.querySelector('#password ~ .login-input-border');
  const usernameErrorMessage = document.getElementById('error-message');
  const passwordErrorMessage = document.getElementById('error-message-pw');

  function validateInput(input, border, errorMessage, errorText) {
    if (input.value.trim() === '') {
      input.parentElement.classList.add('input-field--error');
      input.parentElement.classList.remove('input-field--valid');
      border.style.borderColor = 'rgb(var(--colour-semantic-negative, 224, 7, 81))';
      errorMessage.textContent = errorText;
      errorMessage.style.display = 'block';
    } else {
      input.parentElement.classList.remove('input-field--error');
      input.parentElement.classList.add('input-field--valid');
      border.style.borderColor = 'purple';
      errorMessage.textContent = '';
      errorMessage.style.display = 'none';
    }
  }

  usernameInput.addEventListener('blur', () => {
    validateInput(usernameInput, usernameBorder, usernameErrorMessage, '아이디를 입력해주세요');
  });

  passwordInput.addEventListener('blur', () => {
    validateInput(passwordInput, passwordBorder, passwordErrorMessage, '비밀번호를 입력해주세요');
  });

  document.querySelector('form').addEventListener('submit', function (event) {
    let valid = true;

    if (usernameInput.value.trim() === '') {
      validateInput(usernameInput, usernameBorder, usernameErrorMessage, '아이디를 입력해주세요');
      valid = false;
    }

    if (passwordInput.value.trim() === '') {
      validateInput(passwordInput, passwordBorder, passwordErrorMessage, '비밀번호를 입력해주세요');
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    }
  });
});