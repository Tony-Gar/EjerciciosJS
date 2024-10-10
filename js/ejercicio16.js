let palabra = prompt("Ingresa una palabra:");
let palabraInvertida = palabra.split('').reverse().join('');
if (palabra === palabraInvertida) {
    alert("La palabra es un palíndromo.");
} else {
    alert("La palabra no es un palíndromo.");
}
