let numeroo1 = parseInt(prompt('Ingrese el primer número:'));
let numeroo2 = parseInt(prompt('Ingrese el segundo número:'));

    if (numeroo1 > numeroo2) {
      document.write('El número mayor es: ' + numeroo1);
    } else if (numeroo2 > numeroo1) {
      document.write('El número mayor es: ' + numeroo2);
    } else {
      document.write('Los números son iguales');
    }