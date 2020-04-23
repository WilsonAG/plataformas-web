const { writeFile, promises: fs } = require('fs');
const colors = require('colors');


// const createFile = base => {
//     return new Promise((resolve, reject) => {
//         if (isNaN(base)) {
//             reject(`El valor de la base ${base} debe ser un numero.`.red)
//             return
//         }

//         let data = '';

//         for (let i = 1; i <= 10; i++) {
//             data += `${base} * ${i} = ${base * i}\n`;
//         }

//         writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//             if (err)
//                 reject(err.message.red);
//             else
//                 resolve(`Archivo con tabla del ${base} creado!!`.green)
//         });
//     })
// }

const createFile = async base => {
    if (isNaN(base)) {
        throw new Error(`El valor de la base ${base} debe ser un numero.`.red)
    }

    let data = '';

    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    await fs.writeFile(`tablass/tabla-${base}.txt`, data)
        .catch(err => { throw new Error(err.message.red) });

    return `Archivo con tabla del ${base} creado!!`.green

}

const listarTabla = (base, limite) => {
    let data = `
===============================================
                TABLA DEL ${base}          
===============================================\n`
        .green

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    return data
}

module.exports = {
    createFile,
    listarTabla
}