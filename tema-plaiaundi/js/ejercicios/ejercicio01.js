/*
 * Tema 2 · Fundamentos y particularidades de JavaScript
 * Ejercicio 1 · ¿Qué tipo tengo realmente?
 */

// 1. Solicitud de datos mediante prompt()
const nombreInput = prompt("Introduce tu nombre:");
const edadInput = prompt("Introduce tu edad:");
const alturaInput = prompt("Introduce tu altura en metros (ej. 1.75):");

// 2. Comprobación de tipos de los valores originales
console.log("=== TIPOS INICIALES ===");
console.log("Nombre: " + nombreInput + " | Tipo: " + typeof nombreInput);
console.log("Edad: " + edadInput + " | Tipo: " + typeof edadInput);
console.log("Altura: " + alturaInput + " | Tipo: " + typeof alturaInput);

// 3. Conversión de datos numéricos con Number()
const edad = Number(edadInput);
const altura = Number(alturaInput);

// 4. Comprobación de tipos y datos tras la conversión
console.log("=== TIPOS TRAS CONVERSIÓN CON Number() ===");
console.log("Nombre: " + nombreInput + " | Tipo: " + typeof nombreInput);
console.log("Edad: " + edad + " | Tipo: " + typeof edad);
console.log("Altura: " + altura + " | Tipo: " + typeof altura);