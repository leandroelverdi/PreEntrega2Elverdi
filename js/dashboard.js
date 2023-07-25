const nameUser = localStorage.getItem("loggedInUser");
const sideBar = document.querySelector("#sideBar");
const userName = document.querySelector("#userName");
userName.innerText = `${nameUser}`;

const cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach((cartItem) => {
  const tr = document.querySelector("#tr");
  tr.innerHTML = `
      <th scope="row">${cartItem.id}</th>
      <td>${cartItem.name}</td>
      <td>${cartItem.category}</td>
      <td>${cartItem.price}</td>
`;
});

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../index.html";
});
