const axios = require('axios');


const obtenerLatLong = async(direccion) => {
    // Optionally the request above could also be done as
    const encodeUrl = encodeURI(direccion);

    const respuesta = await axios.get('https://geocode.xyz', {
        params: {
            locate: encodeUrl,
            json: 1
        }
    });

    if (respuesta.data.length === 0) {
        throw new Error(`NO existe resultados para ${direccion}`);
    }

    const data = respuesta.data;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    obtenerLatLong
}