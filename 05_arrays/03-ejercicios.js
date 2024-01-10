//declara una función flecha a la que acepte como argumento un array de números y devuelva
//la suma de todos ellos.

const suma = a => {
    let acumulador = 0;

    a.forEach(num => {
        acumulador += num;
    });

    return acumulador;
}

const arrayNumeros = new Array(1, 2, 3);

console.log(suma(arrayNumeros));

///declara un array con 3 poblaciones y un segundo array con otras 3. Únelos en un tercer array.

const a1 = new Array("Toledo", "Madrid", "Cuenca");
const a2 = ["Mora", "Getafe", "Ávila"];

const a12 = a1.concat(a2);

console.log(a12);

//recorre el array resultante con un bucle.
//DOS FORMAS

for (let i = 0; i < a12.length; i++) {
    console.log(a12[i]);
}

/*
a12.forEach(loc => {
    console.log(loc)
});
*/

//Ordena alfabeticamente los elementos del array

console.log(a12.sort());

//Invierte el orden de los elementos del array

console.log(a12.reverse());

//Une el array en una sola cadena separada por comas.

console.log(a12.join(","));

//Crea un cuarto array con los tres últimos elementos y muéstralo por consola

const a4 = a12.slice(a12.length - 3, a12.length);
//const a4 = a12.slice(-3); <-- simplificado

console.log(a4);