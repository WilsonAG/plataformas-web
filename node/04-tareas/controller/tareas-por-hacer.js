const { promises: fs } = require('fs');
const colors = require('colors');

let toDoList = []

const save = async () => {
    let data = JSON.stringify(toDoList)
    await fs.writeFile('model/data.json', data)
        .catch(err => { throw new Error('Error al guardar') });
}

const load = () => {
    try {
        toDoList = require('../model/data.json')
    } catch (error) {
        toDoList = []
    }
};

const list = () => {
    load()
    console.log('=============== To Do List =================='.green)
    toDoList.forEach(task => {
        console.log(`Tarea: ${task.description}`)
        console.log(`Estado: ${task.isCompleted}\n`)
    })
    console.log('============================================='.green)
}

const listByCompleted = (completed) => {
    load()
    completed = (completed == 'true')
    const filteredList =
        toDoList.filter(task => task.isCompleted == completed);
    if (filteredList) {
        console.log('=============== To Do List =================='.green)
        filteredList.forEach(task => {
            console.log(`Tarea: ${task.description}`)
            console.log(`Estado: ${task.isCompleted}\n`)

        })
        console.log('============================================='.green)
    }
}

const add = description => {
    load()
    let task = {
        description,
        isCompleted: false
    }
    toDoList.push(task);
    save().catch(console.log);
    return task;
}

const update = (description, completed = true) => {
    load();
    let index = toDoList.findIndex(task => task.description === description);

    if (index >= 0) {
        toDoList[index].isCompleted = completed;
        save()
        return true
    }
    return false;
}

const deleteTask = description => {
    load()
    let newToDoList = toDoList.filter(task => task.description !== description)
    if (newToDoList.length === toDoList.length) {
        return false
    }
    toDoList = newToDoList
    save()
    return true
}

module.exports = {
    add,
    list,
    update,
    deleteTask,
    listByCompleted
}