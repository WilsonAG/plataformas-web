/**
 *  let tiene un alcance local
 */
let name = 'Wolverine';

if (true) {
    let name = 'Magneto';  // name = magneto
}

console.log(`Hola ${name}`); // name = wolverine

/**
 *  var: tiene un alcance global
 */
for (var i = 0; i <= 5; i++) {
    console.log(`i=${i}`);
}

console.log(`valor final de i = ${i}`); // i = 6