require('./config/env');

const { argv } = require('./config/yargs');
const { getWeather } = require('./controller/weather');


console.log(argv.city);
getWeather(argv.city)
    .then(res => {
        res = res.data;
        console.log(`La temperatura de ${res.name} es ${res.main.temp}°c.`);
    })
    .catch(err => {
        console.log(`No se pudo encontrar el clima para ${argv.city}.`)
    });
