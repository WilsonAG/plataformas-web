const { instance: axios } = require('../config/axios');

const getWeather = async (city, units = 'metric') => {
    let response = await axios
        .get(process.env.API_URI, {
            params: {
                q: encodeURI(city),
                appid: process.env.API_KEY,
                units
            }
        });
    return response;
}

module.exports = { getWeather }