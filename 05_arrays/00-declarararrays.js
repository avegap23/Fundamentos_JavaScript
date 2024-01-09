const a1 = new Array(); // nuevo array vacío. 

const a2 = new Array(4); //Nuevo array de 4 elementos

//nuevo array con tres elementos definidos
const apellidos = new Array('Perez', 'Martínez', 'González');

//así podemos inicializar un array con valores:
for (let i = 0; i < 10; i++) {
  a1[i] = Math.random();
}


console.log(a1);
console.log(a2);
console.log(apellidos);

const a3 = ["algo", 2, "algo más", true];
console.log(a3);
console.log(a3[2]);