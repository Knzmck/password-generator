//**Making arrays for letters, uppercase letters, numbers & symbols 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var uppercase = (() => {
  var uppercase = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return uppercase
})();
var symbols = (() => {
  var symbols = [...Array(14)].map((val, i) => String.fromCharCode(i + 33));
  return symbols
})();
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwordPlace = document.querySelector("#passwordtext");
// Write password to the #password input 
function writePassword(event) {
  event.preventDefault();
  var includeUppercase = document.getElementById("includeUppercase");
  var includeNumbers = document.getElementById("includeNumbers");
  var includeSymbols = document.getElementById("includeSymbols");
  var upperCase = letters.forEach(a => a.toUpperCase());
  if (includeUppercase.checked == true) {
    letters = letters.concat(uppercase);
  }
  if (includeNumbers.checked == true) {
    letters = letters.concat(numbers);
  }
  if (includeSymbols.checked == true) {
    letters = letters.concat(symbols);
  }
  console.log(includeUppercase.checked);
  var characterAmount = document.getElementById("characterAmount").value;
  var passwordText = "";
  var password = [];
  for (i = 0; i < characterAmount; i++) {
    var randomNumber= Math.floor(Math.random() * (letters.length - 1) + 0);
  password.push(letters[randomNumber])
  }; 
  password=password.join("");
  console.log(password);

document.getElementById("password").innerHTML = password
}
// // Add event listener to generate button 
generateBtn.addEventListener("click", writePassword); 