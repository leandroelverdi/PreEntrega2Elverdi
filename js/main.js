import { initProduct, addToCart } from "../db/DBbookings.js";

const arrayProducts = [];
let arrayCart = JSON.parse(localStorage.getItem("cart")) || [];
let id = 1;

initProduct(arrayProducts, id);

const app = document.querySelector("#app");

arrayProducts.forEach((element) => {
  const card = document.createElement("div");
  card.classList.add("w-50");
  card.innerHTML = ` 
        <div class="card">
          <img
            src="images/${element.url}"
            class="card-img-top"
            alt="Departamento"
          />
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">$${element.price}</p>
            <div class="d-flex flex-column gap-2">
              <a href="#" class="btn btn-primary btnAdd">Reservar</a>
            </div>
          </div>
        </div>
        `;
        
  const btnAdd = document.querySelectorAll(".btnAdd");

  btnAdd.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (localStorage.getItem("loggedInUser") !== null) {
        alert("Se agrego su reserva")
        addToCart(arrayCart, element); 
        localStorage.setItem("cart", JSON.stringify(arrayCart));
      } else {
        alert("Necesitas estar logeado para poder reservar");
        window.location.href = "./pages/login.html";
      }
      
    });
  });

  app.appendChild(card);
});
