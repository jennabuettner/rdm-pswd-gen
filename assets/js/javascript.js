var generateBtn = document.querySelector("#generate");
var possibleChars = []
var passwordArray = []
var possSpecChars = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','+','-','=','~']
var possLcChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var possUcChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var possNumChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9']

validateUserInput()

function validateUserInput() {
  let passLength = prompt("Between 8 and 128, how many characters would you like your password to be?");
  if (passLength < 8 || passLength > 128) {
    alert("Uh oh! You must select a length between 8 and 128.")
    validateUserInput();
    return null
  }
}

userPrompts()

function userPrompts() {
let lcChars = confirm("Would you like to include lowercase letters?");
let ucChars = confirm("Would you like to include uppercase letters?");
let numChars = confirm("Would you like to include numbers?");
let specChars = confirm("Would you like to include special characters?");

  if (!lcChars && !ucChars && !numChars && !specChars) {
    alert("Uh oh! You must select at least one (1) type of character set.");
    userPrompts();
    return null
  }
}

  // function 



// function generatePassword() {
//   if (lcChars) {
//     possibleChars.concat(possLcChars)
//   } else if (ucChars) {
//     possibleChars.concat(possUcChars)
//   } else if (numChars) {
//     possibleChars.concat(possNumChars)
//   } else (specChars) 
//     possibleChars.concat(possNumChars)
//   }
// }


// if (!lcChars && !ucChars && !numChars && !specChars) {
//   alert("Uh oh! You must select at least one (1) type of character set.");
//   return generatePassword()
// }

// console.log(passChars)
// console.log(lcChars)
// console.log(ucChars)
// console.log(numChars)
// console.log(specChars)

// function generatePassword() {
//   if (lcChars) {
//     possibleChars.concat(possLcChars)
//   } else if (ucChars) {
//     possibleChars.concat(possUcChars)
//   } else if (numChars) {
//     possibleChars.concat(possNumChars)
//   } else (specChars) 
//     possibleChars.concat(possNumChars)
//   }



// console.log(possibleChars) 






    // if (!lcChars && !ucChars && !numChars && !specChars) {
    // alert("Uh oh! You must select at least one (1) type of character set.");
    // return generatePassword();
  // } else if (lcChars && !ucChars && !numChars && !specChars) {
  //   return generatePassword(lcChars);
  // } else if (!lcChars && ucChars && !numChars && !specChars) {
  //   return generatePassword(ucChars);
  // } else if (!lcChars && !ucChars && numChars && !specChars) {
  //   return generatePassword(numChars);
  // } else if (!lcChars && !ucChars && !numChars && specChars) {
  //   return generatePassword(specChars);
  // };

// }
// function validateUserInput(chars) {
// parseInt(chars)
// if not return null
// };


// var generateBtn = document.querySelector("#generate");

// function confirmUserInput(chars) {
//   if (!lcChars && !ucChars && !numChars && !specChars) {
//     alert("Uh oh! You must select at least one (1) type of character set.");
//     return generatePassword();
//   } else if (lcChars && !ucChars && !numChars && !specChars) {
//     return generatePassword(lcChars);
//   } else if (!lcChars && ucChars && !numChars && !specChars) {
//     return generatePassword(ucChars);
//   } else if (!lcChars && !ucChars && numChars && !specChars) {
//     return generatePassword(numChars);
//   } else if (!lcChars && !ucChars && !numChars && specChars) {
//     return generatePassword(specChars);
//   };

// // }

// function generatePassword() {}
// if (lcChars) {
//   possibleChars.concat(possLcChars)
// } else if (ucChars) {
//   possibleChars.concat(possUcChars)
// } else if (numChars) {
//   possibleChars.concat(possNumChars)
// } else (specChars) {
//   possibleChars.concat(possNumChars)
// }

// return passwordArray.join()



// } if (lcChars && !ucChars && !numChars && !specChars) {
//   return generatePassword(lcChars);
// } else if (!lcChars && ucChars && !numChars && !specChars) {
//   return generatePassword(ucChars);
// } else if (!lcChars && !ucChars && numChars && !specChars) {
//   return generatePassword(numChars);
// } else if (!lcChars && !ucChars && !numChars && specChars) {
//   return generatePassword(specChars);
// };