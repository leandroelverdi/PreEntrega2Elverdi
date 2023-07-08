import {arrayApartments} from "../db/ladging.js";

// Function to filter products
function filterProducts() {
  const selectedCategory = document.getElementById("category").value;
  const minPrice = parseInt(document.getElementById("price-min").value) || 0;
  const maxPrice =
    parseInt(document.getElementById("price-max").value) || Infinity;

  const filteredProducts = arrayApartments.filter((product) => {
    const categoryMatch =
      selectedCategory === "" || product.category === selectedCategory;
    const priceMatch = product.price >= minPrice && product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  showProducts(filteredProducts);
  console.log(selectedCategory);
}

// Function to display filtered products
function showProducts(filteredProducts) {
  const contianer = document.getElementById("container-lodging");
  contianer.innerHTML = "";

  if (filteredProducts.length === 0) {
    contianer.innerHTML = `
        <div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>`;
    return;
  }

  filteredProducts.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="../images/${element.url}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column align-items-center">
          <h2 class="card-title fs-4">${element.title}</h2>
          <p class="card-text">$${element.price}</p>
          <a id="" href="#" class="btn btn-primary w-100">Reservar</a>
        </div>
      </div>
    </div>
  </div>
  `;
    contianer.appendChild(card);
  });
}

// Event listeners
document.getElementById("btn-filter").addEventListener("click", filterProducts);
document.getElementById("btn-reset").addEventListener("click", function () {
  document.getElementById("category").value = "";
  document.getElementById("price-min").value = "";
  document.getElementById("price-max").value = "";
  filterProducts();
});

// Show all products on page load
showProducts(arrayApartments);
