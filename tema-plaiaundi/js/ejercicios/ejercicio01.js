/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */


const nombreInput = prompt("Introduce tu nombre:");
const edadInput = prompt("Introduce tu edad:");
const alturaInput = prompt("Introduce tu altura en metros (ej. 1.75):");


console.log("=== TIPOS INICIALES ===");
console.log("Nombre: " + nombreInput + " | Tipo: " + typeof nombreInput);
console.log("Edad: " + edadInput + " | Tipo: " + typeof edadInput);
console.log("Altura: " + alturaInput + " | Tipo: " + typeof alturaInput);


const edad = Number(edadInput);
const altura = Number(alturaInput);


console.log("=== TIPOS TRAS CONVERSIÓN CON Number() ===");
console.log("Nombre: " + nombreInput + " | Tipo: " + typeof nombreInput);
console.log("Edad: " + edad + " | Tipo: " + typeof edad);
console.log("Altura: " + altura + " | Tipo: " + typeof altura);