import {arrayApartments} from "../db/ladging.js";

const contianer = document.getElementById("container-lodging");

arrayApartments.forEach((element) => {
  const card = document.createElement("div");
  card.classList.add("col-4");
  card.innerHTML = `
    <div class="card">
    <img
      src="images/${element.url}"
      class="card-img-top"
      alt="Departamento"
    />
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">$${element.price}</p>
    <div class="d-flex flex-column gap-2">
      <a id="" href="#" class="btn btn-primary">Reservar</a>
      <a href="./pages/details.html?id=${element.id}" class="btn btn-primary info">Mas información</a>
    </div>
  </div>
  </div>
`;
  contianer.appendChild(card);
});
