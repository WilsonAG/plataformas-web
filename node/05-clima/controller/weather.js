const { instance: axios } = require('../config/axios');

const getWeather = async (city, units = 'metric') => {
    let response = await axios
        .get('/', {
            params: {
                q: encodeURI(city),
                appid: process.env.API_KEY,
                units
            }
        });
    return response;
}

module.exports = { getWeather }