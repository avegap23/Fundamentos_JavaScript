/*
             * Es el momento de gestionar booleans
             */
// True (Verdadero)
// 1
// "Whatever"
// 3.14
// 100 > 5
// 1 < 100
// '1' == 1

console.log(Boolean(1));
console.log(Boolean('Whatever'));
console.log(Boolean(3.14));
console.log(Boolean(100 > 5));
console.log(Boolean(1 < 100));
console.log(Boolean('1' == 1));

// False (Falso)
// 0, -0
// ""
// NaN
// null
// undefined
// '1' === 1

console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(''))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean('1' === 1));

console.log(Boolean(NaN));
console.log(Boolean("cadena"));

let cadena = "";
if (cadena) {
  console.log(cadena);
}
else {
  console.log("no has introducido nada");
}

