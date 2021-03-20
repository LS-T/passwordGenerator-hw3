// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = [
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
var specialCharacters = [
  "!",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "|",
  "}",
  "~",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(lowerCase.length);
console.log(specialCharacters);

function generatePassword(){
  var passwordLength = prompt(
    "How long would you like your password to be? " +
      "\n(Between 8-125 characters)");
  
  if (passwordLength <= 8 || passwordLength <= 125) {
    var wantsLowerCase = confirm("Would you like to include lowercase letters? ");
     if (wantsLowerCase) {
      lowerIndex = Math.floor(Math.random() * lowerCase.length);
      lowerCaseValue = lowerCase[lowerIndex];
      console.log(lowerCaseValue);
     } 
      var wantsUpperCase = confirm("Would you like to include uppercase letters? ");
        if(wantsUpperCase) {
        upperIndex = Math.floor(Math.random() * lowerCase.length);
        upperCaseValue = lowerCase[upperIndex].toUpperCase();
        console.log(upperCaseValue);
     }
      var wantsNumbers = confirm("Would you like to include numbers? ");
        if(wantsNumbers) {
        numberIndex = Math.floor(Math.random() * numbers.length);
        numberValue = numbers[numberIndex];
        console.log(numberValue);
        }
          var wantsSpecial = confirm("Would you like to include special characters? ");
            if(wantsSpecial) {
              specialIndex = Math.floor(Math.random() * specialCharacters.length);
              specialValue = specialCharacters[specialIndex];
              console.log(specialValue);
            }  
    
  } else {
      alert("must be between 8-125 characters");
}};








  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generatePassword();
