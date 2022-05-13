const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const eye = document.querySelector(".fa-eye");
const eye2 = document.querySelector("#eye-two");
const greet = document.querySelector("#welcome");

/* show password event listeners*/
eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else if (password.type === "text") {
    password.type = "password";
  }
});

eye2.addEventListener("click", () => {
  if (password2.type === "password") {
    password2.type = "text";
  } else if (password2.type === "text") {
    password2.type = "password";
  }
});

/* submit form event listeners  */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  console.log(password);
});

/* functions */

function checkInputs() {
  // get the values from user
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    // show error and add errr class
    setErrorFor(username, "username cannot be blank");
  } else {
    // add success class
    setSucessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSucessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "password cannot be blank");
  } else if (password.textLength <= 8) {
    setErrorFor(password, "password must be at least 8 characters");
  } else {
    setSucessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "password cannot be blank");
  } else if (password2Value != passwordValue) {
    setErrorFor(password2, "password does not match");
  } else {
    setSucessFor(password2);
  }

  if (
    (password.parentElement.className === "form-control success") &
    (username.parentElement.className === "form-control success") &
    (email.parentElement.className === "form-control success") &
    (password2.parentElement.className === "form-control success")
  ) {
    window.location.href = "./home.html";
    greet.innerText = `Hello, ${username}`;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error message inside the smaal tag
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // add error message inside the smaal tag
  small.innerText = "";

  // add error class
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
