var generateBtn = document.querySelector("#generate");
var possibleChars = []
var passwordArray = []
var possSpecChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '+', '-', '=', '~']
var possLcChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var possUcChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var possNumChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function userPrompts() {

 } 

function generatePassword() {

  var passwordLength = parseInt(prompt("Between 8 and 128, how many characters would you like your password to be?"));
  if (!passwordLength) {
    alert("You must enter a number.");
    return generatePassword();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Uh oh! You must select a length between 8 and 128.");
    return generatePassword()
  }
  var LcChars = confirm("Would you like to include lowercase letters?");
  var UcChars = confirm("Would you like to include uppercase letters?");
  var NumChars = confirm("Would you like to include numbers?");
  var SpecChars = confirm("Would you like to include special characters?");


  if (!LcChars && !UcChars && !NumChars && !SpecChars) {
    alert("Uh oh! You must select at least one (1) type of character set.");
    generatePassword();
  }

      console.log(possLcChars)
      console.log(possUcChars)
      console.log(possNumChars)
      console.log(possSpecChars)
      console.log(passwordLength)

      if (LcChars) {
        possibleChars = possibleChars.concat(possLcChars);
      }
      if (UcChars) {
        possibleChars = possibleChars.concat(possUcChars);
      }
      if (NumChars) {
        possibleChars = possibleChars.concat(possNumChars);
      }
      if (SpecChars) {
        possibleChars = possibleChars.concat(possSpecChars);
      }

      for (var i = 0; i < passwordLength; i++) {
      var randomNum = Math.floor(Math.random() * possibleChars.length)
      passwordArray.push(possibleChars[randomNum])
        }
    
      return passwordArray.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
