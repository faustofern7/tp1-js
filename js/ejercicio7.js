let numero1_ = parseFloat(prompt("Ingrese el primer número:"));
    let numero2_ = parseFloat(prompt("Ingrese el segundo número:"));
    let numero3_ = parseFloat(prompt("Ingrese el tercer número:"));

    if (numero1 > numero2 && numero1 > numero3) {
      document.write("El número mayor es: " + numero1);
    } else if (numero2 > numero1 && numero2 > numero3) {
      document.write("El número mayor es: " + numero2);
    } else if (numero3 > numero1 && numero3 > numero2) {
      document.write("El número mayor es: " + numero3);
    } else {
      document.write("Los números son iguales.");
    }