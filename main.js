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

const imprimirResultado = (nombre, notas, promedio) => {
  let notaFinal = "";
  if (promedio >= 7) {
    notaFinal = "APROBADO";
  } else {
    notaFinal = "DESAPROBADO";
  }
  let notasParseadas = notas.join("-");

  alert(
    `${nombre} tiene las siguentes notas: [${notasParseadas}]\nlo cual de calificacion final obtiene un promedio de: ${promedio}\nel estudiate se encuentra ${notaFinal}`
  );
};

while (true) {
  let nombre = prompt("Ingrese el nombre del estudiante o [Q] para salir");

  if (["Q", "q"].includes(nombre)) {
    break;
  }

  const estudiante = new Estudiante(nombre);

  while (true) {
    const nota = parseFloat(
      prompt("Ingrese todas las notas o ingrese un campo vacio para continuar")
    );
    if (isNaN(nota)) {
      break;
    } else if (nota > 0 && nota <= 10) {
      estudiante.agregarNota(nota);
    } else {
      alert("Ingrese un numero en el rango del [1, 10]");
    }
  }

  const promedio = estudiante.calcularPromedio().toFixed(2);

  if (estudiante.notas.length <= 2) {
    break;
  }
  imprimirResultado(estudiante.nombre, estudiante.notas, promedio);
}
