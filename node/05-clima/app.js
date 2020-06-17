require('./config/env');

const { argv } = require('./config/yargs');
const { getWeather } = require('./controller/weather');


// console.log(argv.city);
getWeather(argv.city)
    .then(res => {
        res = res.data;

        switch (argv.option) {
            case 'h':
                console.log(`La temperatura de ${res.name} es ${res.main.temp}°c.`);
                console.log(`La humedad es ${res.main.humidity}°%.`);
                break;
            case 'p':
                console.log(`La temperatura de ${res.name} es ${res.main.temp}°c.`);
                console.log(`La presion es ${res.main.pressure}.`);
                break;

            default:
                console.log(`La temperatura de ${res.name} es ${res.main.temp}°c.`);
                break;
        }

    })
    .catch(err => {
        console.log(`No se pudo encontrar el clima para ${argv.city}.`)
    });
