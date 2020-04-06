let deadpool = {
    name: 'Wade',
    lastname: 'Wilson',
    hability: 'regeneration',
    getName: function() {
        return `${this.name} ${this.lastname} - hability: ${this.hability}`;
    }
}

// opcion1:
console.log(deadpool.getName());
let n = deadpool.name
let ln = deadpool.lastname
let pow = deadpool.hability


// opcion 2: destructuracion
let { name: nombre, lastname, hability } = deadpool
console.log(nombre, lastname, hability);