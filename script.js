let password = document.querySelector("#pw");
let confirmPassword = document.querySelector("#cpw");

if (
  password === document.activeElement ||
  confirmPassword === document.activeElement
) {
  if (password.textContent != confirmPassword.textContent) {
  }
}

//Att göra:

//En loop som kollar om bokstäver är uppercase
let length = password.length;
let pwUpper = password.toUpperCase();

function uppercaseValidation() {
  for (let i = 0; i < password.length; i++) {
    return password[i] === pwUpper[i];
  }
}

//En loop som kollar om strängen innehåller någon siffra
function containsNumber(password) {
  return /\d/.test(password);
}

//En kontroll som kollar att strängen minst är 8 tecken
function lengthValidation() {
    return 8 < password.length;
}
//En kontroll som jämför password och confirmPassword

function comparePassword(){
    return password === confirmPassword;
}
