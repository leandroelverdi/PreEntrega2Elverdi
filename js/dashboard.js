const nameUser = localStorage.getItem("loggedInUser");
const sideBar = document.querySelector("#sideBar");
const h2 = document.createElement("h2");
h2.innerText = `usuario: ${nameUser}`;
sideBar.appendChild(h2);

const bookings = document.querySelector("#bookings");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach((cartItem) => {
  const div = document.createElement("div");
  div.innerHTML = `${cartItem.name}`
  bookings.appendChild(div);
});

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../index.html";
});
