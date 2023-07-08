const sideBar = document.getElementById("sideBar");

const h2 = document.createElement("h2");

h2.innerText = `usuario: ${loggedInUser}`;

sideBar.append(h2);

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../index.html";
});
