const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/* lugar.obtenerLatLong(argv.direccion)
    .then(console.log); */

/* clima.getCLima(40.42955, -3.67930)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.obtenerLatLong(direccion);
        const temperatura = await clima.getCLima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${coordenadas.direccion} es de ${temperatura}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion} `;

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);