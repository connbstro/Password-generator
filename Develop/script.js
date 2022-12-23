// Assignment code here
let generatePassword = function () {
  let passLength = 0;
  let charSet = "";
  let lowercase = "abcdefghijklmnnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNNOPQRSTUVWXYZ";
  let numeric = "123456789";
  let special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let newPass = "";

  // Set password length
  do {
    passLength = window.prompt(
      "Set number of characters: Min of 8 and Max of 128"
    );
    if (passLength < 8 || passLength > 128) {
      alert("Must enter in a number between 8 and 128");
    }
  } while (passLength < 8 || passLength > 128);

  do {
    // set password criteria
    let promptLower = window.confirm(
      "generate password with lowercase letters?"
    );
    let promptUpper = window.confirm(
      "generate password with uppercase letters?"
    );
    let promptNum = window.confirm("generate password with numbers?");
    let promptSpecial = window.confirm(
      "generate password with special characters?"
    );

    // Check prompt responses
    if (promptLower) {
      charSet += lowercase;
    }
    if (promptUpper) {
      charSet += uppercase;
    }

    if (promptNum) {
      charSet += numeric;
    }

    if (promptSpecial) {
      charSet += special;
    }
  } while (charSet == null);

  // Get password length, set password based on prompts
  for (let i = 0; i < passLength; i++) {
    newPass += charSet[Math.floor(Math.random() * charSet.length)];
  }
  // console.log(newPass);
  return newPass;
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  // console.log(password);
}

//   // Add event listener to generate button
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
