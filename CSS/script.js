
var passwordLength; 
var lowerCase; 
var upperCase; 
var numbers;
var specialCharacters;
var enter; 

// Here is the list for all the variables (Arrays). 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]; 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);

// Function to create the password with else/if. 
function generatePassword() {
  passwordLength = window.prompt("Please select how many characters you would like. Choose between 8-128 characters."); 
  console.log("Password Length" + passwordLength);
  var characterList = []; 
  if(passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  }

  else {  
    var includeLowerCase = confirm("Would you like to include lower case letter?");
    console.log("Lower case letters " + includeLowerCase);
    var includeUpperCase = confirm("Would you like to include upper case letters?");
    console.log("Upper case letters " + includeUpperCase);
    var includeNumbers = confirm("Would you like to include numbers?");
    console.log("Numbers " + includeNumbers); 
    var includeSpecialCharacters = confirm("Would you like to include special characters?"); 
    console.log("Special Characters " + includeSpecialCharacters); 
  }

  // User needs to select at least 1 of the 4 criteria noted above to generate a password. 
  if(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
    enter = window.prompt("You must select at least one crieria");
  }
  // If any of the 4 criteria is selected to generate a password. 
  else if(includeLowerCase || includeUpperCase || includeNumbers || includeSpecialCharacters) {
  characterList = characterList.concat(lowerCase, upperCase, numbers, specialCharacters); 
  console.log(characterList)}; 

var passwordBlank = [];

// Iteration for random selection. 
for(var i = 0; i < passwordLength; i++) {
  var enteredcriteria = Math.floor(Math.random() * characterList.length);
  passwordBlank.push(characterList[enteredcriteria]); 
  console.log(characterList); 
}

// Returns the commands to generate a password. 
var password = passwordBlank.join("");
console.log("Your password is: " + password); 
return password; 
}