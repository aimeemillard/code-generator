//variables that contain character sets available for use in passwrod generation
var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var numSet = "0123456789";
var specialSet = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

//arrays that contain character sets available for use in password generation
var upperArr = upperSet.split("");
var lowerArr = lowerSet.split("");
var numberArr = numSet.split("");
var specialArr = specialSet.split("");

//check arrays have the correct characters included
console.log(upperArr);
console.log(lowerArr);
console.log(numberArr);
console.log(specialArr);

//create variables with (global scope) that represent the criteria selected by the user
var includeUpper;
var includeLower;
var includeNum;
var includeSpecial;
var userLen;

//create an object to store password length selected by user
var userInputOptions = {};

//create a variable that will contain the characters randomly selected, based upon the user's criteria
var newPassword = [];

//create a variable that will be equal to the password generated
var finalPassword;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  passwordText.textContent = finalPassword;
}

// Function to prompt user for password options
function getPasswordOptions() {
  var userLen = prompt("How many characters would you like your password to contain?");
  var userLen = parseInt(userLen);

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (typeof userLen === "number" && userLen >= 8 && userLen <= 128) {
    console.log("user supplied password length value is acceptable");
  } else if (!userLen) {
    console.log("The user decided not to make a password.");
    return;
  } else {
    //Alert user imporper input, and remind of required criteria
    alert("Please enter a number between 8 and 128.");

    getPasswordOptions();
  }

  // Conditional statement to check if user does not include any types of characters.
  includeUpper = confirm("Would you like to include uppercase letter characters?");
  includeLower = confirm("Would you like to include lowercase letter characters?");
  includeNum = confirm("Would you like to include number characters?");
  includeSpecial = confirm("Would you like to include special characters?");

  //check if user selected no variables at all .End if no characters selected.
  if (!includeUpper && !includeLower && !includeNum && !includeSpecial) {
    console.log("The user chose not to include any characters.");
    alert("You failed to choose any of the eligible character sets");
    return;
  } else {
    //Add user's selected length option to the object userInputOptions
    userInputOptions.passwordLength = userLen;
    console.log("here is how many chars they want " + userInputOptions.passwordLength);

    generatePassword();
  }
}

// Function for getting a random element from an array
function randomElement(x) {
  return x[Math.floor(Math.random() * x.length)];
}

//Function that generates password from user's input
function generatePassword() {
  //Array to store all possible characters to inclue in password
  var includeChars = [];

  //Array to include one of each of the chosen characters used
  var guaranteedCharacters = [];

  //Conditional statements that adds characters from an array based on user input.
  if (includeSpecial) {
    //loop over array of special characters
    for (var i = 0; i < specialArr.length; i++) {
      includeChars.push(specialArr[i]);
    }
    guaranteedCharacters.push(randomElement(specialArr));
    //check arrays
    console.log(includeChars);
    console.log(guaranteedCharacters);
  }

  if (includeNum) {
    //loop over array of number characters
    for (var i = 0; i < numberArr.length; i++) {
      includeChars.push(numberArr[i]);
    }
    guaranteedCharacters.push(randomElement(numberArr));
    //check arrays
    console.log(includeChars);
    console.log(guaranteedCharacters);
  }

  if (includeLower) {
    //loop over array of lower case characters
    for (var i = 0; i < lowerArr.length; i++) {
      includeChars.push(lowerArr[i]);
    }
    guaranteedCharacters.push(randomElement(lowerArr));
    //check arrays
    console.log(includeChars);
    console.log(guaranteedCharacters);
  }

  if (includeUpper) {
    //loop over array of upper case characters
    for (var i = 0; i < upperArr.length; i++) {
      includeChars.push(upperArr[i]);
    }
    guaranteedCharacters.push(randomElement(upperArr));
    //check arrays
    console.log(includeChars);
    console.log(guaranteedCharacters);
  }

  //empty newPassword array
  newPassword = [];
  for (var i = 0; i < userInputOptions.passwordLength - guaranteedCharacters.length; i++) {
    console.log(randomElement(includeChars));
    newPassword.push(randomElement(includeChars));
  }
  console.log(newPassword);

  //add on the guarenteed characters
  newPassword = newPassword.concat(guaranteedCharacters);
  console.log(newPassword);

  //create a string from the array containing the characters to make a password
  finalPassword = newPassword.join("");
  console.log(finalPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
