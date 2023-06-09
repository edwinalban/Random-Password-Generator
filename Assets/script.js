// Assignment Code
var generateBtn = document.querySelector("#generate");

// Allows Special Characters in array to be selected with special prompt input of 'yes'
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Allows Numeric Characters in array to be selected with numeric prompt input of 'yes'
var numericCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

// Allows Lowercased Letters in array to be selected with lowercased prompt input of 'yes'
var lowerCasedCharacters = [
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

// Allows Uppercased Letters in array to be selected with uppercased prompt input of 'yes'
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates password to be written to #password input
function generatePassword() {

  // Creates empty array to which random selector can push selected elements
  var possibleCharacters = [];

  // Prompts user for password length
  var charLength = prompt("Please choose the number of characters for your password. Your password be at least 8 and no more than 128 characters.");

  // Converts prompt output from string to integer
  charLength = parseInt(charLength);

  // Creates loop to limit user input to prompt to a number between 8 and 128
  do {
    if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
      var invalidEntry = alert("Password must be between 8 and 128 characters. Please enter a number between 8 and 128.");
      var charLength = prompt("Please choose the number of characters for your password. It must be at least 8 and no more than 128 characters");
      charLength = parseInt(charLength);
    }
  } while (charLength < 8 || charLength > 128 || isNaN(charLength));

  // Confirms user input for password length
  var confirmLength = confirm("Your password will include " + charLength + " characters.");

  // Displays user input for charLength value and type in console log
  console.log(charLength);
  console.log(typeof charLength);

  // Prompts user to allow/deny use of lowercased letters in password, converts input to lowercased string to match allowable inputs in lowercasedChoice array
  var lowercased = prompt("Do you want to include lowercased letters? Please type 'Yes', or 'No'.").toLowerCase();
  var lowercasedChoice = ["yes", "no"];

  // If user input is "yes", confirms lowercased letters will be used and adds lowercased characters array to possible characters in password array
  // If user input is "no", confirms lowercased characters will not be used
  if (lowercased === lowercasedChoice[0]) {
    var lowercasedConfirm = confirm("Lowercased letters will be used!");
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  } else {
    var lowercasedDeny = confirm("Lowercased letters will not be used.");
  };

  // Displays user input for lowercased prompt in console log
  console.log(lowercased);

  // Prompts user to allow/deny use of uppercased letters in password, converts input to lowercased string to match allowable inputs in uppercasedChoice array
  var uppercased = prompt("Do you want to include uppercased letters? Please type 'Yes', or 'No'.").toLowerCase();
  var uppercasedChoice = ["yes", "no"];

  // If input is "yes", confirms uppercased letters will be used and adds uppercased characters array to possible characters in password array
  // If input is "no", confirms uppercased characters will not be used
  if (uppercased === uppercasedChoice[0]) {
    var uppercasedConfirm = confirm("Uppercased letters will be used!");
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  } else {
    var uppercasedDeny = confirm("Uppercased letters will not be used.");
  };

  // Displays user input for uppercased prompt in console log
  console.log(uppercased);

  // Prompts user to allow/deny use of numbers in password, converts input to lowercased string to match allowable inputs in numericChoice array
  var numeric = prompt("Do you want to include numbers? Please type 'Yes', or 'No'.").toLowerCase();
  var numericChoice = ["yes", "no"];

  // If input is "yes", confirms numbers will be used and adds numeric array to possible characters in password array
  // If input is "no", confirms numbers will not be used
  if (numeric === numericChoice[0]) {
    var numericConfirm = confirm("Numbers will be used!");
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  } else {
    var numericDeny = confirm("Numbers will not be used.");
  };

  // Displays user input for numeric prompt in console log
  console.log(numeric);

  // Prompts user to allow/deny use of special characters in password, converts input to lowercased string to match allowable inputs in numericChoice array
  var special = prompt("Do you want to include special characters? Please type 'Yes', or 'No'.").toLowerCase();
  var specialChoice = ["yes", "no"];

  // If input is "yes", confirms special characters will be used and adds special characters array to possible characters in password array
  // If input is "no", confirms special characters will not be used
  if (special === specialChoice[0]) {
    var specialConfirm = confirm("Special characters will be used!");
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  } else {
    var specialDeny = confirm("Special characters will not be used.");
  };

  // Displays user input for special prompt in console log
  console.log(special);

  // If possibleCharacters array is empty, alerts user that no character types have been selected, runs function again, otherwise generates password
  if (possibleCharacters.length === 0) {
    var noEntry = alert("No character types have been chosen. Please choose at least 1 character type.");
    return "";
  } else {

    // Displays all possible characters from which random selector can choose
    console.log(possibleCharacters);

    // Creates empty array to which random selector can push selected elements
    var password = [];

    // Randomly selects characters from possible characters array until user input for password length is reached
    for (var i = 0; i < charLength; i++) {
      var randIndex = Math.floor(Math.random() * possibleCharacters.length);
      var randElement = possibleCharacters[randIndex];

      // Pushes randomly selected characters to password array
      password.push(randElement);
    };

    // Displays password array in console log
    console.log(password);

    // Joins password array elements in a string with no separating characters (e.g. commas, hyphens, brackets, etc.)
    password.join('');

    // Displays password after join
    console.log(password.join(''));

    // Displays password in #password input field on page
    return password.join('');
  };
};