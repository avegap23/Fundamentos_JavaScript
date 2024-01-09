//1. declara una función "espar" de la manera tradicional que nos devuelva un boolano que nos diga si un número es par

function esPar(num) {
    return Boolean(num % 2 == 0);

    //if (num % 2 == 0) {
    //    return true
    //} else {
    //    return false
    //}
}

let numero = 5
if (esPar(numero)) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}

/*
2. declara una función lambda o anónima que nos devuelva el número de veces que aparece un caracter en una cadena
Podemos recorrer una cadena con un bucle

for (car in cadena) {
    console.log();
}
*/

const nCar = function (cadena, caracter) {
    let contador = 0;
    for (const c of cadena) {
        if (c === caracter) {
            contador++;
        }
    }
    return contador;
};

console.log(nCar("Toledo", "o"));

//3. declara una función al estilo Arrow Function que pasadas tres cadenas nos las devuelva concatenadas separadas por comas

const comas = (cad1, cad2, cad3) => `${cad1}, ${cad2}, ${cad3}`;

console.log(comas("hola", "como estas", "bien"));