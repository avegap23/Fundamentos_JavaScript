// Función tradicional
const f1 = function (a) {
  return a + 100;
}

// Desglose de la función flecha

// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
const f2 = (a) => {
  return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
const f3 = (a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
const f4 = a => a + 100;

console.log(f4(30));

const suma = (a, b) => a + b;

console.log(suma(4, 5));


const f5 = () => {
  let g = 5;
  return "hola que ase".toUpperCase();
}

console.log(f5());

