const arrayApartments = [];
let id = 0;

class Apartment {
  constructor(id, title, price, category, url) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
    this.url = url;
  }
}

const apart0 = new Apartment(
  id++,
  "Departamento dos hambientes",
  11700,
  "apartments",
  "departamentos.jpg"
);
arrayApartments.push(apart0);

const apart1 = new Apartment(
  id++,
  "Departamento choto",
  23450,
  "apartments",
  "departamento_uno.jpg"
);
arrayApartments.push(apart1);

const apart2 = new Apartment(
  id++,
  "Departamento mas copado",
  47541,
  "apartments",
  "departamento_uno.jpg"
);
arrayApartments.push(apart2);

export {arrayApartments};