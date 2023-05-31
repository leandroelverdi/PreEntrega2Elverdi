const message = (msg) => {
  parseInt(prompt(msg));
};

const calculator = () => {
  let response = 0;
  let num = 0;
  let num2 = 0;

  while (response != 1 && response != 2 && response != 3 && response != 4) {
    let response = message(
      "[1] Suma\n[2] Resta\n[3] Multiplicacion\n[4] Divicion\n[5] Volver"
    );
    switch (response) {
      case 1:
        num = message("Ingrese el primer numero");
        num2 = message("Ingrese el segundo numero");
        alert(num + num2);
        break;
      case 2:
        num = message("Ingrese el primer numero");
        num2 = message("Ingrese el segundo numero");
        alert(num - num2);
        break;
      case 3:
        num = message("Ingrese el primer numero");
        num2 = message("Ingrese el segundo numero");
        alert(num * num2);
        break;
      case 4:
        num = message("Ingrese el primer numero");
        num2 = message("Ingrese el segundo numero");
        alert(num / num2);
        break;
      case 5:
        main();
        break;
    }
  }
};

const powers = () => {
  let num = message("Ingrese un numero");
  let num2 = message("Ingrese la base de la potencia");
  let res = num;

  for (let i = 1; i < num2; i++) {
    res *= num;
  }
  return alert(res);
};

//Calculadora de cuotas
alert("Calculadora de cuotas");

let response = message(
  "[1] Ingrese el monto a pagar\n[2] Salir"
);
while (response != 1 && response != 2) {
  let response = message(
    "[1] Ingrese el monto a pagar\n[2] Salir"
  );
}
