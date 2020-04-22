const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

module.exports.argv = require('yargs')
    .command('listar', 'Lista la tabla de multiplicar', opts)
    .command('crear', 'Crear un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;


