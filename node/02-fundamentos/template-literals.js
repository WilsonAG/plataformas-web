let name = 'deadpool';
let real = 'Wade Wilson';
/**
 * Template literals permiten la inyeccion de codigo
 * javascript directamente en un string
 */
console.log(name + ' ' + real);
console.log(`${name + ' ' + real}`);
let completeName = name + ' ' + real;
let compleTemplate = `${name + ' ' + real}`
console.log(completeName === compleTemplate);

function getName() {
    return `${name + ' ' + real}`;
}

console.log(`El nombre es: ${getName()}`);