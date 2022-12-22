// Assignment code here
var generatePassword = function () {
  var passLength = 0;
  var charSet = "";
  var lowercase = "abcdefghijklmnnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNNOPQRSTUVWXYZ";
  var numeric = "123456789";
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  // Promt for password length
  do {
    passLength = window.prompt("How many characters would you like? Min of 8 and Max of 128");
    // creating expression to see if passLength is not a number
    if (passLength < 8 || passLength > 128) {
      // alerts uers if entry is not between 8 and 128
      alert("You must enter in a number between 8 and 128!");
    }
  } while (passLength < 8 || passLength > 128);

  do {

    // prompt for password criteria
    var promptLower = window.confirm("Would you like to include lowercase letters?")
    var promptUpper = window.confirm("Would you like to include uppercase letters?")
    var promptNum = window.confirm("Would you like to include numbers?")
    var promptSpecial = window.confirm("Would you like to include special characters?")

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