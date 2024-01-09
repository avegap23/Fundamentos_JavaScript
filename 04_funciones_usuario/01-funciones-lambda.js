//una función lambda o anónima tiene que ser asignada a una variable 
//si hacemos una llamada a la función antes de estar declarada
//dará error:

//let resultado = multiplicar(3, 5);

//se puede declarar de la siguiente manera
const multiplicar = function multiplicacion(a, b) {
    return a * b;
}

let resultado = multiplicar(3, 5);
console.log(resultado);

//el siguiente código dará error ya que "multiplicacion" no está definido
//console.log(multiplicacion(4, 7));

//tenemos que llamar a "multiplicar"
console.log(multiplicar(4, 7));


//se puede (y se suele) declarar omitiendo el nombre de la función
const sumar = function (a, b) {
    return a + b;
}

console.log(sumar(3, 5));