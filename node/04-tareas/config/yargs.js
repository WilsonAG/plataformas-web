const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completed = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

}

const argv = require('yargs')
    .command('list', 'Muestra la lista de tareas', {

    })
    .command('add', 'Crear una nueva tarea', {
        description
    })
    .command('update', 'Actualiza el estado de la tarea', {
        description,
        completed
    })
    .command('delete', 'Elimina la tarea de la lista', {
        description
    })
    .demandCommand(1)
    .alias('h', 'help')
    .help()
    .argv;

module.exports = {
    argv
}

