passwordDisplay = document.getElementById('password');

// passwordDisplay.value = 'hogehoge';

function generatePassword(element, length) {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let password = '';

  for (let i = 0; i < length; i++) {
    let n = Math.floor(Math.random() * alphabets.length);
    console.log("random", n);
    let randomLetter = alphabets[n];
    console.log("letter", randomLetter);
    password += randomLetter;
  }
  element.value = password;
}

generatePassword(passwordDisplay, 8);
