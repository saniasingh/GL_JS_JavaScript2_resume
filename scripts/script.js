function saveCredentials() {
  if (!localStorage.getItem("username")) {
    const username = "glAdmin01";
    const password = "glTest@1";

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    console.log("Username and password saved to local storage.");
  } else {
    console.log("Username and password already exist in local storage.");
  }
}

function getCredentials() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username && password) {
    console.log("Username:", username);
    console.log("Password:", password);
  } else {
    console.log("No username and password found in local storage.");
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorText = document.getElementById("errorText");

  const username = usernameInput.value;
  const password = passwordInput.value;

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (username === savedUsername && password === savedPassword) {
    window.location.href = "pages/resumes.html";
  } else {
    errorText.textContent = "Invalid username/password.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  saveCredentials();
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", handleFormSubmit);
});
