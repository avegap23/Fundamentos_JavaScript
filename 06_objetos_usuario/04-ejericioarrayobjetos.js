// crea una clase persona con una función generadora que tenga
//objertos con los tres atributos vistos 

function Persona(nombre, apellido, fechaNac) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.anioNac = fechaNac;
}


/*Crea un array de varios objetos persona
crea un bucle que recorra el array de objetos con otro bucle 
anidado que recorra las propiedades de cada objeto*/

const personas = new Array();

const p1 = new Persona('Pepe', 'Pérez', 1975);
const p2 = new Persona('Antonio', 'Pérez', 1998);
const p3 = new Persona('Juan', 'Alameda', 1990);
const p4 = new Persona('María', 'Pérez', 2000);

personas.push(p1);
personas.push(p2);
personas.push(p3);
personas.push(p4);

//console.log(personas);

personas.forEach((persona, indice) => {
    //console.log(persona);
    console.log(`----Persona ${indice}------`)

    for (prop in persona) {
        console.log(`${prop}: ${persona[prop]}`);
    }

});

/* for (persona of personas) {
    console.log(persona);
}
*/