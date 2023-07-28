import { initProduct, addToCart } from "../db/DBbookings.js";

const arrayProducts = [];
let arrayCart = JSON.parse(localStorage.getItem("cart")) || [];
let id = 1;

initProduct(arrayProducts, id);

const app = document.querySelector("#app");
let count = 0;

arrayProducts.forEach((element) => {
  if (count < 6) {
    const card = document.createElement("div");
    card.classList.add("card", "col", "p-0");
    card.innerHTML = `
        <img src="images/${element.url}" class="card-img-top booking-img" alt="Item" />
        <div class="card-body d-flex flex-column justify-content-between gap-5">
          <div class="h-100 d-flex flex-column justify-content-start">
            <h2 class="card-title fs-5">${element.name}</h2>
            <p class="card-text">$${element.price}</p>
          </div>
          <a href="#" id="${element.id}" class="btn btn-primary btnAdd w-100">Reservar</a>
        </div>
        `;
    count++;
    app.appendChild(card);
  }
});

const btnAdd = document.querySelectorAll(".btnAdd");

btnAdd.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const { target } = e;
    const { id } = target;
    if (localStorage.getItem("loggedInUser") !== null) {
      const item = arrayProducts.find((item) => item.id == id);
      alert("Se agrego su reserva");
      addToCart(arrayCart, item);
      localStorage.setItem("cart", JSON.stringify(arrayCart));
    } else {
      alert("Necesitas estar logeado para poder reservar");
      window.location.href = "./pages/login.html";
    }
  });
});
