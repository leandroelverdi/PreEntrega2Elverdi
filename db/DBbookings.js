export class Products {
  constructor(product) {
    const { id, name, price, description, category, url } = product;
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.url = url;
  }
}

export const initProduct = (ArrayProduct, id) => {

  const apartment = new Products({
    id: id++,
    name: "Departamento",
    price: 15000,
    description: "Departamento dos ambientes bastante lujoso y tranquilo",
    category: "apartment",
    url: "departamentos.jpg",
  });
  ArrayProduct.push(apartment);

  const apartment_one = new Products({
    id: id++,
    name: "Departamento",
    price: 13500,
    description: "Departamento ubicado en el centro de New York",
    category: "apartment",
    url: "departamento_uno.jpg",
  });
  ArrayProduct.push(apartment_one);


  const apartment_two = new Products({
    id: id++,
    name: "Departamento retiro",
    price: 25000,
    description: "Departamento ubicado en el centro de Retiro",
    category: "apartment",
    url: "departamento_uno.jpg",
  });
  ArrayProduct.push(apartment_two);
}

export const addToCart = (cart, product) => {
  cart.push(product);
};