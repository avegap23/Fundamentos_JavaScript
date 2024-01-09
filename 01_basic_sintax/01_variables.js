var cadena_global = "esto es una cadena";

if (true) {
  let num1 = 5;
  var num_global = 80;
}

console.log(num_global);

//las variables var se pueden acceder antes de inicializarlas
//pero su valor será undefined
console.log(numero_global);

var numero_global = 4;

console.log(numero_global);

//las variables con let no se pueden acceder antes de inicializarlas
//nos dará un error
//console.log(cadena_let);
let cadena_let = "esta cadena";
console.log(cadena_let);


//daría error porque num1 esta en el scope del if
//console.log(num1);

const PI = 3.1416;
//no se puede cambiar el valor a una constante
//PI = 7.16;
