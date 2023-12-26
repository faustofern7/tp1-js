let numero1 = 20;
let numero2 = 10;

document.write("El resultado de la suma es: " + (numero1 + numero2));
document.write(" <br> El resultado de la resta es: " + (numero1 - numero2));
document.write(
  " <br> El resultado de la multiplicación es: " + numero1 * numero2
);
document.write(" <br> El resultado de la division es: " + numero1 / numero2);

let nombre = "Fausto Fidel";
let apellido = " Fernández";

let nombreCompleto = nombre + apellido;

document.write("<br> el nombre completo es: " + nombreCompleto);

let gradosCelcius = 40;
let gradosFahrenheit = (gradosCelcius * 9) / 5 + 32;

document.write(
  "<br>" +
    gradosCelcius +
    "ºC grados celcius son equivalentes a " +
    gradosFahrenheit +
    "ºF grados fahrenheit "
);
