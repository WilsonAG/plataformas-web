let name = 'deadpool';
let real = 'Wade Wilson';

console.log(name + ' ' + real);
console.log(`${name+' '+real}`);
let completeName = name + ' ' + real;
let compleTemplate = `${name+' '+real}`
console.log(completeName === compleTemplate);

function getName() {
    return `${name+' '+real}`;
}

console.log(`El nombre es: ${getName()}`);