// Charactor Array 
let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Q', 'X', 'Y', 'Z']
let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbolArr = ['?', '+', '-', '*', '/', '|', '*', '&', '^', '%', '$', '#', '@', '!', '~']


// Generate Random Password Function
function generatePassword () {
  // Prompts asking password length and which chars to include
  let lengthInput = parseInt(prompt('Choose the length of your password. Please enter a number between 8 and 128'));
  if (lengthInput < 8 || lengthInput > 128) {
    alert('Please enter a number between 8 and 128')  
  }  else {
    alert(`Your password will be ${lengthInput} charactors long`)
  }

  let lowerCaseInput = confirm("Would you like to include lowercase charactors? Confirm = YES, Cancel = NO.")
  let upperCaseInput = confirm('Would you like to include Uppercase charactors? Confirm = YES, Cancel = NO.')
  let numberInput = confirm('Would you like to include numbers? Confirm = YES, Cancel = NO.')
  let symbolInput = confirm('Would you like to include symbols? Confirm = YES, Cancel = NO.')

  // setting user inputs from confirm prompts to variables to be sent to array
  let userInput = ''

  if (lowerCaseInput) {
    userInput = userInput.concat(lowerCaseArr)
  } 
  if (upperCaseInput) {
    userInput = userInput.concat(upperCaseArr)
  } 
  if (numberInput) {
    userInput = userInput.concat(numberArr)
  } 
  if (symbolInput) {
    userInput = userInput.concat(symbolArr)
  } 
  
  console.log(userInput)
  
  // FOR Loop to generate password with length from user input
  let passwordArr = []
  for (var i = 0; i < lengthInput; i++) {
    var generatedPassword = random(userInput)
    passwordArr.push(generatedPassword)
  }

  console.log(generatedPassword)
  console.log(passwordArr)

  // function to randomize userInput variables
  function random(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  return passwordArr.join('')

 }


 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
