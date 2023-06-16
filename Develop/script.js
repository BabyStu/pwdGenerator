// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword(length, criteria) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var pwdCriteria = prompt("Criteria for password? (Enter: 'U' for uppercase, 'L' for lowercase, 'N' for numbers, and an 'S' for symbols)")
  var pwdLength = prompt("Length of password?")
  var specs = '';

  if (pwdCriteria.includes('U')) {
    specs += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } else if (pwdCriteria.includes('L')) {
    specs += 'abcdefghijklmnopqrstuvwxyz'
  } else if (pwdCriteria.includes('N')) {
    specs += '0123456789'
  } else if (pwdCriteria.includes('S')) {
    specs += '!@#$%^&*()'
  }

  if (pwdLength)

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




