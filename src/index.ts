/**
 * Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor
 */
let multiplicando: number = Number(prompt("Ingrese el número a multiplicar: "));
let multiplicador: number = Number(
  prompt("Ingrese hasta que número multiplicar")
);

for (let i = 0; i <= multiplicador; i++) {
  console.log(multiplicando + " x " + i + " = " + multiplicando * i);
}
