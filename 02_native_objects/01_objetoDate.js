const ahora = new Date();
const fincurso = new Date(2024, 5, 30, 14, 15, 0);

console.log(ahora);
console.log(fincurso);

const tiempo_falta = fincurso - ahora;
console.log("Milisegundos que faltan hasta fin de curso: " + tiempo_falta);

//metodos para representar objeto Date
console.log(ahora.toString());
console.log(ahora.toTimeString());
console.log(ahora.toDateString());

console.log(ahora.toLocaleString());
console.log(ahora.toLocaleTimeString());
console.log(ahora.toLocaleDateString());

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(ahora.toLocaleDateString("es-ES", options));