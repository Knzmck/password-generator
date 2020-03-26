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







//**Making arrays 
var letters = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

var upperCase = (() => {
  var upperCase = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return upperCase
})();


var numbers = ('1', '2', '3','4', '5', '6','7','8','9','0');

var symbols = (() => {
  var symbols = [...Array(14)].map((val, i) => String.fromCharCode(i + 33));
  return symbols
})();

console.log(symbols);

// Function for creating password






