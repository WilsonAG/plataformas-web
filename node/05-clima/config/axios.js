const axios = require('axios');

let instance = axios.create({
    baseURL: process.env.API_URI,

});

module.exports = {
    instance
}