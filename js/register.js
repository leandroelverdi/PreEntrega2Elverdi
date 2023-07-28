import { getUsers } from "../db/users.js";

const form = document.querySelector("#formRegister");

const addNewUser = () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const newUser = {
    username,
    password
  };

  const addUser = [...getUsers, newUser];
  localStorage.setItem("users", JSON.stringify(addUser));
  window.location.href = "./login.html";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewUser();
});
