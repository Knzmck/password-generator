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
  var UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
  var LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
  var NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57) 
  var SYMBOL_CHAR_CODES = arrayFromLowtoHigh(58, 64) 
  var letters = "A-Z"
 // var passLength = (user input)

function arrayFromLowtoHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
//**synching character amount inputs
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmountNumber(e) {
    const value = e.target.value
    valuecharacterAmountNumber.value = value
    valuecharacterAmountRange.value = value

}
//Create arrays of uppercase, numbers, symbols and letters
// always add letters
// if user checks include uppercase add uppercase
// if else do not
//if user checks include numbers, add numbers 
// if else do not
// if user checks include symbols add symbols
// if else do not
// var length depends on number of symbols detected in input
// generate password without refreshing the page 