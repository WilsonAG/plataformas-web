let empleados = [
    { id: 1, name: 'Santiago' },
    { id: 2, name: 'Wendy' },
    { id: 3, name: 'Leonel' },
];

let salarios = [
    { id: 1, salario: 800 },
    { id: 2, salario: 950 }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => id === empleado.id);
    if (!empleadoDB) {
        callback(`El empleado con id ${id} no existe.`);
    } else {

        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No hay salario para ${empleado.name}`);
    } else {
        let obj = {
            nombre: empleado.name,
            salario: salarioDB.salario
        };
        callback(null, obj);
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log(salario);
    });
});