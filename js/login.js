const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

document.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("loggedInUser") ? alreadyLoged() : login();
});

const alreadyLoged = () => {
  window.location.href = "./dashboard.html";
}

const login = () => {
  const loginForm = document.querySelector("#loginForm");

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
      alreadyLoged();
    } else {
      alert("Nombre de usuario o contraseña incorrectos.");
    }
  });
};
