// Array of numeric characters to be included in password
var numbers = ["0123456789"];
// Array of lowercase characters to be included in password
var lowerCases = ["abcdefghijklmnopqrstuvwxyz"];
// Array of uppercase characters to be included in password
var upperCases = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// Array of special characters to be included in password
var specialCharacters = ["@%+\\/'!#$^?:,)(}{][~-_."];
var userPasswordOptions = [""];

alert("Welcome!");

// // Function to prompt user for password options
function getUserPasswordOptions() {
  // Variable to store length of password from user input
  var userPassword = [""];
  var plPrompt = prompt(
    "How many characters would you like your password to contain?"
  );
  var pLength = parseInt(plPrompt);

  while (pLength < 8 || pLength > 128) {
    pLength = prompt("Length must be 8-128 characters.");
  }
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var specialCharacters = confirm(
    "Do you want special characters in your password?"
  );

  if (numbers === true) {
    userPasswordOptions = userPasswordOptions + number;
  }

  if (lowerCases === true) {
    userPasswordOptions = userPasswordOptions + lowerCases;
  }

  if (upperCases === true) {
    userPasswordOptions = userPasswordOptions + upperCases;
  }

  if (specialCharacters === true) {
    userPasswordOptions = userPasswordOptions + specialCharacters;
  }

  for (i = 0; i < pLength; i++) {
    userPassword +=
      userPasswordOptions[
        Math.floor(Math.random() * userPasswordOptions.length)
      ];
  }

  console.log(userPwd);
  document.getElementById("password").value = userPassword;
}

//   var minimumCount = 0;
//   // // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
//   var minimumNumbers = "";
//   var minimumLowerCases = "";
//   var minimumUpperCases = "";
//   var minimumSpecialCharacters = "";

//   // // Generator functions**
//   var functionArray = {
//     getNumbers: function () {
//       return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
//     },

//     getLowerCases: function () {
//       return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
//     },

//     getUpperCases: function () {
//       return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
//     },
//   };

//   // // Checks to make sure user selected ok for all and uses empty minimums from above
//   if (numbers === true) {
//     minimumNumbers = functionArray.getNumbers();
//     minimumCount++;
//   }

//   if (lowerCases === true) {
//     minimumLowerCases = functionArray.getLowerCases();
//     minimumCount++;
//   }

//   if (upperCases === true) {
//     minimumUpperCases = functionArray.getUpperCases();
//     minimumCount++;
//   }

//   if (specialCharacters === true) {
//     minimumSpecialCharacters = functionArray.getSpecialCharacters();
//     minimumCount++;
//   }

//   // empty string variable for the for loop below
//   var randomPasswordGenerated = "";

//   //   // loop getting random characters
//   for (let i = 0; i < parseInt(passwordLength) - minimumCount; i++) {
//     var randomNumberPicked = Math.floor(Math.random() * 4);

//     randomPasswordGenerated += randomNumberPicked;
//   }
//   // to make sure characters are added to the password
//   randomPasswordGenerated += minimumNumbers;
//   randomPasswordGenerated += minimumLowerCases;
//   randomPasswordGenerated += minimumUpperCases;
//   randomPasswordGenerated += minimumSpecialCharacters;

//   return randomPasswordGenerated;
// }

// function generatePassword() {
//   var options = getRandomPasswordGenerated();
//   // var results = [];
//   var possibleCharacters = [];
//   var guaranteedCharacters = [];

//   if (options.minimumNumbers) {
//     possibleCharacters = possibleCharacters.concat(minimumNumbers);
//     guaranteedCharacters.push(getNumbers(minimumNumbers));
//   }

//   if (options.minimumLowerCases) {
//     possibleCharacters = possibleCharacters.concat(minimumLowerCases);
//     guaranteedCharacters.push(getNumbers(minimumLowerCases));
//   }
//   if (options.minimumUpperCases) {
//     possibleCharacters = possibleCharacters.concat(minimumUpperCases);
//     guaranteedCharacters.push(getNumbers(minimumUpperCases));
//   }
//   if (options.minimumSpecialCharacters) {
//     possibleCharacters = possibleCharacters.concat(minimumSpecialCharacters);
//     guaranteedCharacters.push(getNumbers(minimumSpecialCharacters));
//   }
// }

// // // Add event listener to generate button
// // // const specialCharacters = "!@#$%^&*()";
// const generateButton = document.getElementById("generate");
// generateButton.addEventListener("click", writePassword);

// // // Get references to the #generate element
// // // Write password to the #password input
// function writePassword() {
//   var password = generatePasswordOptions();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
