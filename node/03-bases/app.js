const { createFile, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

// console.log(argv)
let comando = argv._[0];
let base = argv.base
let limite = argv.limite

switch (comando) {
    case 'listar':
        console.log(listarTabla(base, limite))
        break;
    case 'crear':
        createFile(base, limite)
            .then(msj => console.log(msj))
            .catch(err => console.log(err.message))
        break;
    default:
        break;
}



