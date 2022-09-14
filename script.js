const password = document.querySelector("#pw");
const confirmPassword = document.querySelector("#cpw");
const btn = document.querySelector("button");
const errorCon = document.querySelector(".errorCon");

const UpperErrorMsg = document.createElement("p");
const UpperErrorNode = document.createTextNode(
  "Password must contain at least one uppercase letter \n"
);
UpperErrorMsg.appendChild(UpperErrorNode);

const NumErrorMsg = document.createElement("p");
const NumErrorNode = document.createTextNode(
  "Password must contain at least one number"
);
NumErrorMsg.appendChild(NumErrorNode);

const LengthErrorMsg = document.createElement("p");
const LengthErrorNode = document.createTextNode(
  "Password must contain at least 8 characters"
);
LengthErrorMsg.appendChild(LengthErrorNode);

password.addEventListener("input", () => {
  if (uppercaseValidation()) {
    if (Array.from(errorCon.childNodes).includes(UpperErrorMsg)) {
      errorCon.removeChild(UpperErrorMsg);
    }
  } else {
    errorCon.appendChild(UpperErrorMsg);
  }
  if (containsNumber()) {
    if (Array.from(errorCon.childNodes).includes(NumErrorMsg)) {
      errorCon.removeChild(NumErrorMsg);
    }
  } else {
    errorCon.appendChild(NumErrorMsg);
  }
  if (lengthValidation()) {
    if (Array.from(errorCon.childNodes).includes(LengthErrorMsg)) {
      errorCon.removeChild(LengthErrorMsg);
    }
  } else {
    errorCon.appendChild(LengthErrorMsg);
  }
});

confirmPassword.addEventListener("input", () => {
  if (comparePassword() === false) {
    console.log("not the same");
  }
});

//Att göra:

//En loop som kollar om bokstäver är uppercase

function uppercaseValidation() {
  let pwUpper = password.value.toUpperCase();
  for (let i = 0; i < password.value.length; i++) {
    if (password.value[i] === pwUpper[i]) {
      return true;
    }
  }
  return false;
}

//En loop som kollar om strängen innehåller någon siffra
function containsNumber() {
  return /\d/.test(password.value);
}

//En kontroll som kollar att strängen minst är 8 tecken
function lengthValidation() {
  return 8 < password.value.length;
}
//En kontroll som jämför password och confirmPassword

function comparePassword() {
  return password === confirmPassword;
}
