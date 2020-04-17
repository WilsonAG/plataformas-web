// setTimeout(() => {
//     console.log('Hola :v');
// }, 3000);

/**
 *  El segundo parametro de esta funcion es un
 *  callback,osea otra funcion que nos enviara un error
 *  o el dato que necesitemos dependiendo el caso. 
 */
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

/**
 * Al usar la funcion el segundo parametro nos va a
 * devolver un error o los datos del usuario.
 */
getUserById(20, (err, user) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de la base de datos es: ', user);
});