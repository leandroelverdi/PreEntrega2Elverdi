const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

document.addEventListener("DOMContentLoaded", () => {
  let loggedInUser = localStorage.getItem("loggedInUser");
  loggedInUser ? showLoggedInMenu() : showLoginForm();
});

const showLoginForm = () => {
  loginForm.style.display = "block";
};

// Mostrar el menú del usuario logueado
const showLoggedInMenu = () => {
  window.location.href = "./dashboard.html";
};

// Manejar el envío del formulario de inicio de sesión
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = usernameInput.value;
  let password = passwordInput.value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", username);
    showLoggedInMenu(username);
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }

  usernameInput.value = "";
  passwordInput.value = "";
});

