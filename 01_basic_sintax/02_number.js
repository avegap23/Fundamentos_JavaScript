let num1 = 0;
let num2 = 5;

const num_const1 = 0;

let cadena1 = "0";
let cadena2 = "5";
let cadena3 = "pepe";

console.log("Tipo de datos de num1 :" + typeof num1);
console.log("Tipo de datos de const1 :" + typeof num_const1);
console.log("Tipo de datos de cadena1 :" + typeof cadena1);


console.log(num1 == cadena1);
console.log(num1 === cadena1);

console.log(num1 == num_const1);
console.log(num1 === num_const1);


//infinity
let division_by_0 = 19 / 0;
console.log(division_by_0);
console.log(typeof division_by_0);

//NaN

let multiplica = num1 * cadena3;
console.log(multiplica);
console.log("Tipo de datos multiplica :" + typeof multiplica);

if (isNaN(multiplica)) {
  console.log("es tipo number pero su valor es " + multiplica);
}

let ceroentrecero = 0 / 0;
console.log(ceroentrecero);
console.log(typeof ceroentrecero);

//Number
let mult2 = num2 * cadena2;
console.log(mult2);
console.log(typeof mult2);

//siempre va a concatenar cuando uno de los operando al menos
//sea un string
console.log("5" + "5");
console.log(5 + "5");
console.log(5 + "n");
console.log("ho" + "la");

//va a intentar muktiplicar o dividir
console.log("5" * "5");
console.log(5 * "5");
console.log("5" / "5");
console.log(5 / "5");

//toFixed
console.log(44.367456.toFixed(2));