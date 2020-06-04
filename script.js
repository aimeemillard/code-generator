// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// // Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var passwordLength = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  // var charType = prompt(
  //   "Enter a character type: special, numeric, uppercase, lowercase."
  // );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (passwordLength() == numericCharacters) {
    return;
  }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passwordLength() < 8) {
    alert("Password length must be at least 8 characters.");
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (passwordLength > 128) {
    alert("Password length must be less than 129 lowerCasedCharacters.");
    return;
  }
  // Conditional statement to check if user does not include any types of characters.
  // if (passwordLength != specialCharacters) {
  //   alert(".");
  //   return;
  // }
  return passwordOptions;
}

//Password generator should ends if all four variables evaluate to false

// Function for getting a random element from an array
function getRandom(passwordLength) {
  var randIndex = Math.floor(Math.random() * passwordLength);
  var ranElement = passwordLength[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = generatePassword();

  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
}

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

// function generatePassword() {
//   var charSet = "";
//   if (charType.toLowerCase === "lowercase") {
//     charSet = "abcdefghijklmnopqrstuvwxyz";
//   } else if (charType.toLowerCase === "uppercase") {
//     charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   } else if (charType.toLowerCase === "numeric") {
//     charSet = "0123456789";
//   } else if (charType.toLowerCase === "special") {
//     charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//   }
//   //return value
//   var retVal = "";
//   //for (var i = 0, n = charSet.length; i < length; i++) {
//   for (var i = 0, n = length; i < length; i++) {
//     //picks a character within charSet at index of random number
//     retVal += charSet.charAt(Math.floor(Math.random() * n));
//   }
//   console.log(retVal);
//   return retVal;
// }
