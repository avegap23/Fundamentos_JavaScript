const cadena = 'Esto es una cadena';
const objetocadena = new String('Esto es una cadena');

console.log(typeof cadena); // string
console.log(typeof objetocadena); //object

console.log(cadena === objetocadena); //devuelve false
console.log(cadena == objetocadena);  //devuelve true

console.log(cadena.toUpperCase());
console.log(objetocadena.toUpperCase());