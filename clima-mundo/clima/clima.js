const axios = require('axios');

const getCLima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bcb639da16a04c7e3a8eee7247ed27f5&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getCLima
}