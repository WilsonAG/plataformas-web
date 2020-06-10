const argv = require('yargs')
    .options({
        city: {
            alias: 'c',
            desc: 'Nombre de la ciudad',
            required: true
        }
    })
    .argv;

module.exports = { argv }

