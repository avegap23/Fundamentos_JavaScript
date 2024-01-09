for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

for (let i = 50; i > 0; i -= 5) {
  console.log(i);
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  //console.log(object[property]);
  //console.log(property);
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// declaración de un array 
const a1 = ["alfonso", "daniel", 2, 4];
//recorrer array con for of
for (const el of a1) {
  console.log(el);
}

// recorrer array con for Each
a1.forEach(el => {
  console.log(el)
})

let contador = 10;


while (contador > 0) {
  console.log(contador);
  contador--;
}