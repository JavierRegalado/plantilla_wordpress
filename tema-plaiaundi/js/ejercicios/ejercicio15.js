/*
Tema 3 Ejercicio 15
Escribe una función llamada esPar que reciba un número y devuelva true si es par o false si es impar.
*/
let num = prompt("Introduce un número:");

const esPar = (numero) => {
    return numero % 2 === 0;
};

console.log(esPar(num));