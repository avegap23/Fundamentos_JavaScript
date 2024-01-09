const lenguajes = new Array('css', 'JavaScript', 'HTML', 'php');
const frameworks = new Array('React', 'Vue', 'Angular.js');


console.log(lenguajes);
lenguajes.reverse();
console.log(lenguajes);
lenguajes.sort();
console.log(lenguajes);


const tecnologias = lenguajes.concat(frameworks);
console.log(lenguajes);
console.log(tecnologias);

tecnologias.push('Webpack');
console.log(tecnologias);


const tecnologiasCsv = tecnologias.join(',');
console.log(tecnologiasCsv);

tecnologias.pop();

console.log(tecnologias);


//Ejemplo con MAP
const array1 = ["Cosa1", "cosa2", "cosa3", "cosa4"];

// Pass a function to map
const map1 = array1.map((elemento) => "<li>" + elemento + "</li>");

console.log(map1);