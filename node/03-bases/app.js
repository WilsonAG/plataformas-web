const { createFile } = require('./multiplicar/multiplicar');
const argv = require('yargs')
    .command('listar', 'Lista la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

console.log(argv.base, argv.limite)

createFile('s')
    .then(msj => console.log(msj))
    .catch(err => console.log(err))


console.log(argv)
