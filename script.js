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

function generatePassword() {
  var charLength = prompt("Please choose the number of characters for your password. It must be at least 8 and no more than 128 characters")
  var confirmLength = alert("Your password will be " + charLength + " characters.")
  
  var lowercase = prompt("Do you want to include lowercase letters?")
  var lowercaseChoice = ["Yes", "No"]
  
    if (lowercase === lowercaseChoice[0]) {
      var lowercaseConfirm = confirm("Lowercase letters will be used!")
  } else {
      var lowercaseDeny = confirm("Lowercase letters will not be used.")
  };

  var uppercase = prompt("Do you want to include uppercase letters?")
  var uppercaseChoice = ["Yes", "No"]
    if (uppercase === uppercaseChoice[0]) {
      var uppercaseConfirm = confirm("Uppercase letters will be used!")
  } else {
      var uppercaseDeny = confirm("Uppercase letters will not be used.")
  };

  var numeric = prompt("Do you want to include numbers?")
  var numericChoice = ["Yes", "No"]
    if (numeric === numericChoice[0]) {
      var numericConfirm = confirm("Numbers will be used!")
  } else {
      var numericDeny = confirm("Numbers will not be used.")
  };

  var special = prompt("Do you want to include special characters?")
  var specialChoice = ["Yes", "No"]
    if (special === specialChoice[0]) {
      var specialConfirm = confirm("Special characters will be used!")
  } else {
      var specialDeny = confirm("Special characters will not be used.")
  };

  var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var lowercaseYes = 



  console.log(charLength)
  console.log(lowercase)
  console.log(uppercase)
  console.log(numeric)
  console.log(special)
};






// invalid entry alerts
// var notEnough = alert("oops " + charLength + " is fewer than 8, please try again.")

// var lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var numericArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", ",", "."]





// Add prompts







    
    

  



// var charLength = prompt("Please choose the number of characters for your password. It must be at least 8 and no more than 128 characters")
//   console.log(charLength)
// var special = confirm("Do you want to include special characters? OK for 'yes', Cancel for 'no')")
// var lowercase = prompt("Do you want to include lowercase letters?")

