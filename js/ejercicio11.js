let numeropp = parseInt(prompt("Ingrese un número:"));

    let divisibles = [];

    if (numeropp % 2 === 0) {
      divisibles.push(2);
    }
    if (numeropp % 3 === 0) {
      divisibles.push(3);
    }
    if (numeropp % 5 === 0) {
      divisibles.push(5);
    }
    if (numeropp % 7 === 0) {
      divisibles.push(7);
    }

    let mensaje = "<br> El " + numeropp + " es divisible por ";

    if (divisibles.length > 0) {
      for (let i = 0; i < divisibles.length; i++) {
        mensaje += divisibles[i];
        if (i < divisibles.length - 1) {
          mensaje += ", ";
        }
      }
      mensaje += ".";
    } else {
      mensaje = "<br> El " + numeropp + " no es divisible por 2, 3, 5 ni 7.";
    }
    document.write("<br>" + mensaje);