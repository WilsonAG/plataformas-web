const { createFile, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

// console.log(argv)
let comando = argv._[0];
let base = argv.base
let limite = argv.limite

switch (comando) {
    case 'listar':
        // console.log('Listado')
        console.log(listarTabla(base, limite))
        break;

    case 'crear':
        // console.log(argv);
        createFile(base)
            .then(msj => console.log(msj))
            .catch(err => console.log(err.message))
        break;
    default:
        break;
}


// console.log(argv.base, argv.limite)



// console.log(argv)
