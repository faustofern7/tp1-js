let numero = parseInt(prompt("Ingrese un número:"));

    let mensaje = "<br> El " + numero + " es divisible por ";

    if (numero % 2 === 0) {
      mensaje += "2. ";
    }
    if (numero % 3 === 0) {
      mensaje += "3. ";
    }
    if (numero % 5 === 0) {
      mensaje += "5. ";
    }
    if (numero % 7 === 0) {
      mensaje += "7. ";
    }

    if (mensaje === "<br> El " + numero + " es divisible por ") {
      mensaje = "<br>El " + numero + " no es divisible por 2, 3, 5 ni 7.";
    }

    document.write( "<br>" + mensaje);