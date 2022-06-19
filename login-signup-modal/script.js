"use strict";

const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginModalBox = document.querySelector("#login-modal-box");
const registerModalBox = document.querySelector("#register-modal-box");
const crossBtn = document.querySelectorAll("#cross-btn");
const overlay = document.querySelector("#overlay");
const errorBox = document.querySelector("#error-box-1");
const createPassword = document.querySelector("#create-password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordVisibility = document.querySelector("#password-visi");
const registerSubmit = document.querySelector("#register-submit");

loginBtn.addEventListener("click", function () {
  loginModalBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

registerBtn.addEventListener("click", function () {
  registerModalBox.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

for (let i = 0; i < crossBtn.length; i++) {
  crossBtn[i].addEventListener("click", function () {
    loginModalBox.classList.add("hidden");
    overlay.classList.add("hidden");
    registerModalBox.classList.add("hidden");
  });
}
console.log(createPassword);

passwordVisibility.addEventListener("click", function () {
  // createPassword.removeAttribute("password");
  if (createPassword.type === "password") {
    createPassword.type = "text";
  } else {
    createPassword.type = "password";
  }
});
// console.log(createPassword.value.length);
createPassword.addEventListener("input", function () {
  const password1 = createPassword.value;

  if (password1.length != 0) {
    if (
      password1.length > 8 &&
      password1.match(/[A-Z]/g) &&
      password1.match(/[a-z]/g) &&
      password1.match(/[0-9]/g) &&
      password1.match(/[@$#!]/g)
    ) {
      errorBox.textContent = "Strong Password!";
      createPassword.style.border = "1px solid green";
    } else {
      errorBox.textContent = "Weak Password!";
      createPassword.style.border = "1px solid red";
    }
  } else {
    errorBox.textContent = "";
  }
});

confirmPassword.addEventListener("blur", function () {
  const password2 = confirmPassword.value;
  console.log(password2);

  if (createPassword.value !== password2) {
    errorBox.textContent = "Password doesn't Matches!";
    registerSubmit.style.cursor = "not-allowed";
    registerSubmit.setAttribute("disabled", "true");
    console.log(registerSubmit);
    confirmPassword.style.border = "1px solid red";
  } else {
    errorBox.textContent = "";
    registerSubmit.style.cursor = "pointer";
    registerSubmit.removeAttribute("disabled", "true");
    confirmPassword.style.border =
      password2 !== "" ? "1px solid green" : "1px solid #a5a1a1";
  }
});
