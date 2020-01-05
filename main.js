passwordDisplay = document.getElementById('password');
passwordLengthInput = document.getElementById('password-length');
passwordGenerateBtn = document.getElementById('generate-btn');

const generatePassword = (element, length) => {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let password = '';

  for (let i = 0; i < length; i++) {
    let n = Math.floor(Math.random() * alphabets.length);
    let randomLetter = alphabets[n];
    password += randomLetter;
  }
  element.value = password;
}

passwordGenerateBtn.addEventListener('click', () => {
  let passwordLength = passwordLengthInput.value;
  if (isNaN(passwordLength) || (Number(passwordLength) <= 0)) {
    generatePassword(passwordDisplay, 10);
  } else {
    generatePassword(passwordDisplay, parseInt(passwordLength));
  }
});

