console.log('inicio del programa.');

setTimeout(() => {
    console.log('primer timeout');

}, 5000);
setTimeout(() => {
    console.log('segundo timeout');

}, 0);
setTimeout(() => {
    console.log('tercer timeout');

}, 0);
console.log('Fin del programa');