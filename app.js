const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');




let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log('====================='.blue);
                console.log(`==tabla del ${argv.base}==`.blue);
                console.log('====================='.blue);
                console.log(data);
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(('Archivo ' + archivo.green + ' creado'), ))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}