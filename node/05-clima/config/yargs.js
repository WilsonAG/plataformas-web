const argv = require('yargs')
    .options({
        city: {
            alias: 'c',
            desc: 'Nombre de la ciudad',
            required: true
        },
        option: {
            alias: 'o',
            desc: 'Devuelve la presion(p) o la humedad(h).',
            choices: ['h', 'p']
        }

    })
    .argv;

module.exports = { argv }

