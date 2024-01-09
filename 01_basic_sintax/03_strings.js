let cadena1 = "Esto es una \"cadena\"";
let cadena2 = 'Esto es una "cadena"';
let cadena3 = "C:\\Windows\\system32";
console.log(cadena1);
console.log(cadena2);
console.log(cadena3);

let nombre = "Pablo";
let apellido = "Martínez";

//concatenar 
let nombre_completo = nombre + " " + apellido;
console.log(nombre_completo);

//template literal `  ` 
let nombre_completo2 = `${nombre} ${apellido}`;
console.log(nombre_completo2);

let template_literal = `Esto es un string literal, añado el valor de la variable nombre:
                        ${nombre}`;
console.log(template_literal);

let texto2 = `Estimado ${nombre} ${apellido}, 
              le informamos que esta noche
              se realizará el cambio de cobertura a las ${Date.now()}`;
console.log(texto2);
console.log(texto2.length)

console.log(typeof nombre);


//ejemplo de .trim()
let ruta = "C:\\Users\\Pablo\\Documents\\JS\\React"

ruta = ruta.trim();
console.log(ruta);

//ejemplo uso de split
let directorios = ruta.split("\\");

console.log(directorios);