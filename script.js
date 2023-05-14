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
  
  var possibleCharacters = [];

    var charLength = prompt("Please choose the number of characters for your password. It must be at least 8 and no more than 128 characters");
    charLength = parseInt(charLength);
    do {          
      if (charLength < 8 || charLength > 128 || isNaN(charLength)) {
        var invalidEntry = alert("Password must be between 8 and 128 characters. Please enter a number between 8 and 128.")
        var charLength = prompt("Please choose the number of characters for your password. It must be at least 8 and no more than 128 characters")
        charLength = parseInt(charLength)
      }      
    } while (charLength < 8 || charLength > 128 || isNaN(charLength));
  
    var confirmLength = confirm("Your password will be " + charLength + " characters.");
    console.log(charLength);
    console.log(typeof charLength);

    var lowercased = prompt("Do you want to include lowercased letters? Please type 'Yes', or 'No'.").toLowerCase();
    var lowercasedChoice = ["yes", "no"];
    
    do {
      if (lowercased === lowercasedChoice[0]) {
        var lowercasedConfirm = confirm("Lowercased letters will be used!")
        possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
      } else if (lowercased === lowercasedChoice[1]) {
          var lowercasedDeny = confirm("Lowercased letters will not be used.")
        } else {
            var invalidEntry = alert("Invalid input. Please enter 'Yes' or 'No'.")
            var lowercased = prompt("Do you want to include lowercased letters? Please type 'Yes', or 'No'.").toLowerCase()
              if (lowercased === lowercasedChoice[0]) {
                var lowercasedConfirm = confirm("Lowercased letters will be used!")
                possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
              } else if (lowercased === lowercasedChoice[1]) {
                  var lowercasedDeny = confirm("Lowercased letters will not be used.")
                }
        } 
    } while (lowercased != lowercasedChoice[0] && lowercased != lowercasedChoice[1]);

    console.log(lowercased);

    var uppercased = prompt("Do you want to include uppercased letters? Please type 'Yes', or 'No'.").toLowerCase();
    var uppercasedChoice = ["yes", "no"];
    
    do {
      if (uppercased === uppercasedChoice[0]) {
        var uppercasedConfirm = confirm("Uppercased letters will be used!")
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
      } else if (uppercased === uppercasedChoice[1]) {
      var uppercasedDeny = confirm("Uppercased letters will not be used.")
      } else {
          var invalidEntry = alert("Invalid input. Please enter 'Yes' or 'No'.")
          var uppercased = prompt("Do you want to include uppercased letters? Please type 'Yes', or 'No'.").toLowerCase()
            if (uppercased === uppercasedChoice[0]) {
              var uppercasedConfirm = confirm("Uppercased letters will be used!")
              possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
            } else if (uppercased === uppercasedChoice[1]) {
                var uppercasedDeny = confirm("Uppercased letters will not be used.")
              }
        }
    } while (uppercased != uppercasedChoice[0] && uppercased != uppercasedChoice[1]);

    console.log(uppercased);

    var numeric = prompt("Do you want to include numbers? Please type 'Yes', or 'No'.").toLowerCase();
    var numericChoice = ["yes", "no"];
    
    do {
      if (numeric === numericChoice[0]) {
        var numericConfirm = confirm("Numbers will be used!")
        possibleCharacters = possibleCharacters.concat(numericCharacters)
      } else if (numeric === numericChoice[1]) {
      var numericDeny = confirm("Numbers will not be used.")
      } else {
          var invalidEntry = alert("Invalid input. Please enter 'Yes' or 'No'.")
          var numeric = prompt("Do you want to include numbers? Please type 'Yes', or 'No'.").toLowerCase()
            if (numeric === numericChoice[0]) {
            var numericConfirm = confirm("Numbers will be used!")
            possibleCharacters = possibleCharacters.concat(numericCharacters)
            } else if (numeric === numericChoice[1]) {
                var numericDeny = confirm("Numbers will not be used.")
              }
        }
    } while (numeric != numericChoice[0] && numeric != numericChoice[1]);

    console.log(numeric);

    var special = prompt("Do you want to include special characters? Please type 'Yes', or 'No'.").toLowerCase();
    var specialChoice = ["yes", "no"];
    console.log(special);
      if (special === specialChoice[0]) {
        var specialConfirm = confirm("Special characters will be used!");
        possibleCharacters = possibleCharacters.concat(specialCharacters);
    } else {
      var specialDeny = confirm("Special characters will not be used.");
    };

    console.log(possibleCharacters);

    var password = [];

    for (var i = 0; i < charLength; i++) {
      var randIndex = Math.floor(Math.random() * possibleCharacters.length);
      var randElement = possibleCharacters[randIndex];

      password.push(randElement);
    }
    console.log(password);
    password.join('');
    console.log(password.join(''));
    return password.join('');
};