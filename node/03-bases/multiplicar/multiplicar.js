const { writeFile } = require('fs');


const createFile = async base => {
    if (isNaN(base)) {
        throw (`El valor de la base ${base} debe ser un numero.`)
    }

    let data = '';

    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err)
            throw new Error(err);
        else
            return (`Archivo con tabla del ${base} creado!!`);
    });
}


// const createFile = base => {

//     return new Promise((resolve, reject) => {
//         if (isNaN(base)) {
//             reject(`El valor de la base ${base} debe ser un numero.`)
//             return
//         }

//         let data = '';

//         for (let i = 1; i <= 10; i++) {
//             data += `${base} * ${i} = ${base * i}\n`;
//         }

//         writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//             if (err)
//                 reject(err);
//             else
//                 resolve(`Archivo con tabla del ${base} creado!!`)
//         });
//     })
// }

module.exports = {
    createFile
}