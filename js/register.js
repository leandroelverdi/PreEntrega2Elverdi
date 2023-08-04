const form = document.querySelector("#formRegister");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewUser();
});

const addNewUser = () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const users = JSON.parse(localStorage.getItem("users"));
  const newUser = { username, password };
  const addUser = [...users, newUser];

  console.log(addUser);
  localStorage.setItem("users", JSON.stringify(addUser));
  alert("Usuario registrado con excito");
  window.location.href = "./login.html";
};
