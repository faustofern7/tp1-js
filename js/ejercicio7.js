let numero1_ = parseFloat(prompt("Ingrese el primer número:"));
let numero2_ = parseFloat(prompt("Ingrese el segundo número:"));
let numero3_ = parseFloat(prompt("Ingrese el tercer número:"));

    if (numero1_ > numero2_ && numero1_ > numero3_) {
      document.write("<br>El número mayor es: " + numero1_git);
    } else if (numero2_ > numero1_ && numero2_ > numero3_) {
      document.write("<br>El número mayor es: " + numero2_);
    } else if (numero3_ > numero1_ && numero3_ > numero2_) {
      document.write("<br>El número mayor es: " + numero3_);
    } else {
      document.write("<br>Los números son iguales.");
    }