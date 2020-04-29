const { argv } = require('./config/yargs');
const toDoList = require('./controller/tareas-por-hacer');

let command = argv._[0]

switch (command) {
    case 'list':
        toDoList.list()
        break;
    case 'add':
        let newTask = toDoList.add(argv.description)
        console.log(newTask)
        break;
    case 'update':
        let updatedTask = toDoList.update(argv.description, argv.completed)
        console.log(updatedTask)
        break;
    case 'delete':
        console.log('delete')
        let status = toDoList.deleteTask(argv.description)
        console.log(status)
        break;

    default:
        console.log('Comnado no valido')
        break;
}

