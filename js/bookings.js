import { initProduct } from "../db/DBbookings.js";

const arrayProduct = [];
let id = 1;
initProduct(arrayProduct, id);

const filterProducts = () => {
  const selectedCategory = document.querySelector("#category").value;
  const minPrice = parseInt(document.querySelector("#price-min").value) || 0;
  const maxPrice =
    parseInt(document.querySelector("#price-max").value) || Infinity;

  const filteredProducts = arrayProduct.filter((item) => {
    const categoryMatch =
      selectedCategory === "" || item.category === selectedCategory;
    const priceMatch = item.price >= minPrice && item.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  showProducts(filteredProducts);
};

const showProducts = (filteredProducts) => {
  const contianer = document.querySelector("#container-lodging");
  contianer.innerHTML = "";

  if (filteredProducts.length === 0) {
    contianer.innerHTML = `
        <div class="alert alert-warning d-flex justify-content-center" role="alert">
          No hay resultados que apliquen a tu filtro
        </div>`;
    return;
  }

  filteredProducts.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="../images/${element.url}" class="img-fluid rounded-start" alt="item">
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column align-items-center">
          <h2 class="card-title fs-4">${element.name}</h2>
          <p class="card-text">$${element.price}</p>
          <a id="" href="#" class="btn btn-primary w-100">Reservar</a>
        </div>
      </div>
    </div>
  </div>
  `;
    contianer.appendChild(card);
  });
};

document.querySelector("#btn-filter").addEventListener("click", filterProducts);
document.querySelector("#btn-reset").addEventListener("click", () => {
  document.querySelector("#category").value = "";
  document.querySelector("#price-min").value = "";
  document.querySelector("#price-max").value = "";
  filterProducts();
});

showProducts(arrayProduct);
