// Assignment code here
var generatePassword = function () {
  var passLength = 0;
  var charSet = "";
  var lowercase = "abcdefghijklmnnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNNOPQRSTUVWXYZ";
  var numeric = "123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);