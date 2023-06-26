var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var pwdCriteria = prompt("Criteria for password? (Enter: 'U' for uppercase, 'L' for lowercase, 'N' for numbers, and an 'S' for symbols)");
  var pwdLength = prompt("How long does the password need to be? (Enter a number between 8-128)");
  var specs = '';
  var pwd = '';

  if (pwdLength < 8 || pwdLength > 128) {
    alert("Invalid password length. Please enter a number between 8-128.");
    return '';
  }

  if (pwdCriteria.includes('U')) {
    specs += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (pwdCriteria.includes('L')) {
    specs += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (pwdCriteria.includes('N')) {
    specs += '0123456789';
  }
  if (pwdCriteria.includes('S')) {
    specs += '!@#$%^&*()';
  }
  if (specs === '') {
    alert("No criteria selected. Please try again and choose at least one criteria. (Enter: 'U' for uppercase, 'L' for lowercase, 'N' for numbers, and an 'S' for symbols)");
    return '';
  }

  for (var i = 0; i < pwdLength; i++) {
    var randomize = Math.floor(Math.random() * specs.length);
    pwd += specs[randomize];
  }

  return pwd;
}

function writePassword(length,criteria) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
