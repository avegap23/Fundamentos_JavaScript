function Persona(nombre, apellido, fechaNac) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.anioNac = fechaNac;
  this.getFechaNac = function () {
    return this.anioNac;
  }
}

//creamos una instancia del objeto Persona
const p1 = new Persona('Pepe', 'Pérez', 1975);
const p2 = new Persona('Maria', 'García', 1990);
const p3 = new Persona('Manolo', 'García', 1970);

console.log(p1);
console.log(p1.getFechaNac());
console.log(p2);
console.log(p3);
console.log(p3.anioNac);