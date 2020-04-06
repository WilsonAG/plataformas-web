// Forma habitual
/* function sumar(a, b) {
    return a + b;
} */


const sumar = (a, b) => a + b;

console.log(`suma de 3 y 4 es: ${sumar(3,4)}`);

function saludar() {
    return 'Hola chicos';
}

let saludo = () => 'Hola chicos';

let deadpool = {
    name: 'Wade',
    lastname: 'Wilson',
    hability: 'regeneration',
    getName: () => `${deadpool.name} ${deadpool.lastname} - hability: ${deadpool.hability}`
}


console.log(saludo());

console.log(deadpool.getName());