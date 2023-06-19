class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this.notas = [];
  }

  agregarNota(nota) {
    this.notas.push(nota);
  }

  calcularPromedio() {
    const suma = this.notas.reduce((total, notas) => total + notas, 0);
    return suma / this.notas.length;
  }
}

const imprimirResultado = (nombre, promedio) => {
  alert(
    `El estudiante ${nombre} tiene un promedio de calificaciones de ${promedio}`
  );
};

while (true) {
  const nombre = prompt(
    "Ingrese el nombre del estudiante o [Q] para salir"
  ).toLowerCase();

  if (nombre === "q") {
    break;
  }

  const estudiante = new Estudiante(nombre);

  while (true) {
    let nota = "";
    if (isNaN(nota) || estudiante.notas.length >= 3) {
      break;
    }
    nota = parseFloat(prompt("Ingrese todas las notas"));

    estudiante.agregarNota(nota);
  }

  const promedio = estudiante.calcularPromedio().toFixed(2);
  imprimirResultado(estudiante.nombre, promedio);
}
