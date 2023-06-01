const valorCuota = (monto, cuotas) => {
  return parseFloat(monto / cuotas).toFixed(2);
};

const calcularInteresDependiendo = (monto, cuotas) => {
  let recargo = prompt("Se le cobran recargo? [S/N]").toLowerCase();
  while (recargo !== "s" && recargo !== "n") {
    recargo = prompt("Se le cobran recargo? [S/N]").toLowerCase();
  }

  if (recargo === "s") {
    let porcentaje = parseFloat(prompt("Ingrese el interes"));

    let interes = parseFloat((monto * porcentaje) / 100);

    let total = parseFloat(monto + interes);

    let result = `El monto inicial es de $${monto} 
    Con un recargo del ${porcentaje}% queda en: $${total}
    Pagando en ${cuotas} cuotas
    Cada cuota costará: $${valorCuota(total, cuotas)}`;

    return alert(result);
  } else if (recargo === "n") {
    let result = ` El precio final es de: $${monto}
    Cantidad de cuotas: ${cuotas}
    Cada cuota costará: $${valorCuota(monto, cuotas)}`;

    return alert(result);
  }
};

//Calculadora de cuotas
let salir = prompt("Calculadora de cuotas: \n[Q] Salir").toLowerCase();

while (salir !== "q") {
  let monto = parseFloat(prompt("Ingrese el monto a pagar:"));

  let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas a pagar"));

  calcularInteresDependiendo(monto, cuotas);

  salir = prompt("¿Calcular otro interes?\n[Enter] Continuar \n[Q] Salir").toLowerCase();
}
