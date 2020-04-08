let empleados = [
    { id: 1, name: 'Santiago' },
    { id: 2, name: 'Wendy' },
    { id: 3, name: 'Leonel' },
];

let salarios = [
    { id: 1, salario: 800 },
    { id: 2, salario: 950 }
];


let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => id === empleado.id);
        if (!empleadoDB) {
            reject(`El empleado con id ${id} no existe.`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = empleado => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No hay salario para ${empleado.name}`);
        } else {
            let obj = {
                nombre: empleado.name,
                salario: salarioDB.salario
            };
            resolve(obj);
        }
    });
}

/* Promesas de manera normal */

// getEmpleado(4).then(
//     empleado => {
//         getSalario(empleado).then(
//             salario => {
//                 console.log(salario);

//             },
//             err => {
//                 console.log(err);
//             }
//         );
//     },
//     err => {
//         console.log(err);
//     }
// );

/*  Promesas en cadena */

getEmpleado(1).then(
    empleado => {
        return getSalario(empleado).then(
            salario => {
                console.log(salario);
            }
        );
    }
).catch(err => {
    console.log(err);
});