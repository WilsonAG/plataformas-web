/**
 *  Pruebas async await
 */

const getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Wilson')
        }, 3000);
    })
}

const saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${nombre}`
}

saludo().then(msj => {
    console.log(msj)
})

// getNombre()
//     .then(nombre => {
//         console.log(nombre)
//     }).catch(err => {
//         console.log('Error en async', err)
//     })


