// Crear un objeto Persona con los siguientes
// datos (nombre, apellidos, edad, género, dirección)

const assert = require('assert').strict;

function createPerson(name, lastname, years, gender, address) {
    let Persona= {
        Nombre: name.charAt(0).toUpperCase(),
        Apellido: lastname.charAt(0).toUpperCase(),
        Edad: years,
        Genero: gender,
        Dirección: address
    }
    return Persona;
}

let person = createPerson('John', 'Foo', 35, 'male', 'fake stree 123')
assert.strictEqual(person.name, 'John')
assert.strictEqual(person.lastname, 'Foo')
console.log(Persona)