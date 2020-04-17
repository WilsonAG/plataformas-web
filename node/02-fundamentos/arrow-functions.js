// Forma habitual
/* function sumar(a, b) {
    return a + b;
} */

const sumar = (a, b) => a + b;
console.log(`suma de 3 y 4 es: ${sumar(3, 4)}`);

// Funcion de manera habitual
function saludar() {
    return 'Hola chicos';
}

// Funcion de flecha
let saludo = () => 'Hola chicos';

// enves de usar this para acceder a las propiedades del objeto hacemos referencia al mismo objeto
let deadpool = {
    name: 'Wade',
    lastname: 'Wilson',
    hability: 'regeneration',
    getName: () => `${deadpool.name} ${deadpool.lastname} - hability: ${deadpool.hability}`
}


console.log(saludo());

console.log(deadpool.getName());