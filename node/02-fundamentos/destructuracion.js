let deadpool = {
    name: 'Wade',
    lastname: 'Wilson',
    hability: 'regeneration',
    getName: function () {
        return `${this.name} ${this.lastname} - hability: ${this.hability}`;
    }
}
/**
 * La destructuracion nos permite la extraccion de variables o funciones de un objeto.
 */
// Si queremos obtener las propiedades de un 
// objeto por separado

// opcion1: de manera normal
console.log(deadpool.getName());
let n = deadpool.name
let ln = deadpool.lastname
let pow = deadpool.hability


// opcion 2: destructuracion
let { name: nombre, lastname, hability } = deadpool
console.log(nombre, lastname, hability);
