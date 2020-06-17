const axios = require('axios').default;


let instance = axios.create({
    baseURL: process.env.API_URI,
});


module.exports = {
    instance
}