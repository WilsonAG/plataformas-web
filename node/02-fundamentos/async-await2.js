let empleados = [
    { id: 1, name: 'Santiago' },
    { id: 2, name: 'Wendy' },
    { id: 3, name: 'Leonel' },
];

let salarios = [
    { id: 1, salario: 800 },
    { id: 2, salario: 950 }
];

/**
 * Funcion asincrona que devuelve un empleado
 * @param {number} id id del impleado a buscar
 */
let getEmpleado = async id => {
    let empleadoDB = empleados.find(empleado => id === empleado.id);
    if (!empleadoDB) {
        throw new Error(`El empleado con id ${id} no existe.`);
    } else {
        return empleadoDB;
    }
};

/**
 * Funcion asincrona que devuelve el nombre del empleado junto a su salario
 * @param {object} empleado objeto del tipo empleado
 */
let getSalario = async empleado => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No hay salario para ${empleado.name}`);
    } else {
        let obj = {
            nombre: empleado.name,
            salario: salarioDB.salario
        };
        return (obj);
    }
}

/**
 * Funcion asincrona que nos devuelve infromacion de un empleado
 * @param {number} id id del empleado 
 */
const getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `El salarop de ${resp.nombre} es de ${resp.salario}`;
}

/**
 * Ejecucion de una async function
 */
getInformacion(4)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));