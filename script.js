//**Making arrays for letters, uppercase letters, numbers & symbols 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
​
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
​
var uppercase = (() => {
  var uppercase = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return uppercase
})();
​
var symbols = (() => {
  var symbols = [...Array(14)].map((val, i) => String.fromCharCode(i + 33));
  return symbols
})();
​
// Assignment Code
var generateBtn = document.querySelector("#generate");
​
// Write password to the #password input 
function writePassword(event) {
  event.preventDefault();
  var includeUppercase = document.getElementById("includeUppercase");
  var includeNumbers = document.getElementById("includeNumbers");
  var includeSymbols = document.getElementById("includeSymbols");
  var upperCase = letters.forEach(a => a.toUpperCase());
  console.log(upperCase)
  if (includeUppercase.checked == true) {
    letters = letters.concat(uppercase);
    console.log(letters);
  }
​
  if (includeNumbers.checked == true) {
    letters.concat(numbers);
    console.log(letters);
  }
​
  if (includeSymbols.checked == true) {
    letters.concat(symbols);
    console.log(letters);
  }
​
  console.log(includeUppercase.checked);
​
  console.log("there");
  var characterAmount = document.getElementById("characterAmount").value;
  var passwordText = "";
​
  for (i = 0; i < characterAmount; i++) {
​
  };
  // var password = Math.floor(Math.random()*letters);
  //   {
  // password += letters.charAt(password)
  // }
​
​
  // var passwordText = document.querySelector("#password");
​
  // passwordText.value = password;
​
}
​
// // Add event listener to generate button 
generateBtn.addEventListener("click", writePassword); 