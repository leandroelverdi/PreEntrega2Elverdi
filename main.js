const calcularInteresDependiendo = (monto, cuotas) => {
  let recargo = prompt("Se le cobran recargo? [S/N]");
  while (recargo !== "S" && recargo !=="s" && recargo !== "N" && recargo !=="n") {
    recargo = prompt("Se le cobran recargo? [S/N]");
  }
  
  if (recargo === "s" || recargo === "S") {
    let porcentaje = parseFloat(prompt("Ingrese el interes"));

    let interes = parseFloat((monto * porcentaje) / 100);

    let valorCuota = parseFloat(total / cuotas);
    
    let total = parseFloat(monto + interes);

    let result = `El monto inicial es de $${monto} 
    Con un recargo del ${porcentaje}% queda en: $${total}
    Pagando en ${cuotas} cuotas
    Cada cuota costará: $${valorCuota}`;

    return alert(result);

  } else if (recargo === "n" || recargo === "N") {
    console.log(valorCuota);
    let result = ` El precio con interes es de: $
    Cantidad de cuotas: ${cuotas}
    Cada cuota costará: $${valorCuota}`;

    return alert(result);

  }
};

//Calculadora de cuotas
let salir = prompt("Calculadora de cuotas: \n[Enter] Iniciar\n[Q] Salir");

while (salir !== "Q" && salir !== "q") {
  let monto = parseFloat(prompt("Ingrese el monto a pagar:"));

  let cuotas = parseFloat(prompt("Ingrese la cantidad de cuotas a pagar"));

  calcularInteresDependiendo(monto, cuotas);

  salir = prompt("¿Calcular otro interes?\n[Enter] Continuar \n[Q] Salir");
}
