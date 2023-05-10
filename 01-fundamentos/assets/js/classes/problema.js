
function Persona (nombre, edad) {
    console.log('Se ejecuta la funcion Persona');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}

const maria = new Persona('Maria', 35);
const melissa = new Persona('Melissa', 20);

console.log(maria);
maria.imprimir();
melissa.imprimir();