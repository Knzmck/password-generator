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

 //if upper case box is checked (value for variable)
 function includeUppercase () {
  var includeUppercase = document.getElementById("includeUppercase");
  includeUppercase.checked = true;
}
//if number box is checked
function includeNumbers () {
  var includeNumbers = document.getElementById("includenumbers");
  includeNumbers.checked = true;
}
//if symbol box is checked
function includeSymbols () {
  var includeSymbols = document.getElementById("includesymbols");
  includeSymbols.checked =true;
}

switch (true) {
  case (includeUppercase === false && includeNumbers === false && includeSymbols === false) :
    var scenario = letters
  case (includeUppercase === true && includeNumbers === false && includeSymbols === false) :
    var scenario = letters.concat(upperCase);
  case (includeUppercase === false && includeNumbers === true && includeSymbols === false) :
    var scenario = letters.concat(numbers)
  case (includeUppercase === false && includeNumbers === false && includeSymbols === true) :
    var scenario = letters.concat(symbols); 
  case (includeUppercase === true && includeNumbers === true && includeSymbols === false) :
    var scenario = letters.concat(upperCase,numbers);
  case (includeUppercase === true && includeNumbers === false && includeSymbols === true) :
    var scenario = letters.concat(upperCase, symbols);
  case (includeUppercase === false && includeNumbers === true && includeSymbols === true) :
    var scenario = letters.concat(numbers, symbols);
  case (includeUppercase === true && includeNumbers === true && includeSymbols === true) :
    var scenario = letters.concat(upperCase, numbers, symbols);
              default: 
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (prewritten)
var characterAmount = document.getElementById("characterAmount").value;

function writePassword() {
  var password = generatePassword(); {
    for (i=0;i<characterAmount;i++)
    var finalArray = Math.floor(Math.random()*chars.length+ 1;)
    password += scenario.charAt(finalArray)
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button (prewritten)
generateBtn.addEventListener("click", writePassword);








/* switch (use array)

case: uppercase is false, numbers is true, symbols are false
use LN array */

/*
switch (true) {

  case (var1 === true && var2 === true) :
    //do something
    break;
  case (var1 === false && var2 === false) :
    //do something
    break;

   default:

 }

 */

  // Function for variable for creating password length 
  var characterAmount = document.getElementById("characterAmount").value;