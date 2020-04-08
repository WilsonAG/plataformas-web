// setTimeout(() => {
//     console.log('Hola :v');
// }, 3000);


let getUserById = (id, callback) => {
    let user = {
        name: 'Wilson',
        id
    }

    if (id === 20) {
        callback(`El usuario con el id ${id} no existe.`)
    } else {
        callback(null, user);
    }

}

getUserById(20, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de la base de datos es: ', user);
});