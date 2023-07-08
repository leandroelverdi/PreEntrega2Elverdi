const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const logout = document.getElementById("logout");

let loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
  loginButton.style.display = "none";
  logout.style.display = "flex";
} else {
  loginButton.style.display = "flex";
  logout.style.display = "none";
}