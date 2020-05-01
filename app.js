// const argumentos = require('yargs')
//     .command('listar', 'Imprime en consola', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('Crear', 'Crea un archivo .txr', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .argv;


const argumentos = require('./config/yargs.js').argumentos;
const color = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argumentos._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argumentos.base, argumentos.limite);
        break;
    case 'crear':
        // console.log('Crear');
        // let base = argumentos.base;
        crearArchivo(argumentos.base, argumentos.limite)
            .then(archivo => console.log(`Archivo creado... ${archivo.red}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando Desconocido.');
}

// let argumentos = process.argv;
// let parametro = argumentos[2];
// let base = parametro.split('=')[1];

// let base = argumentos.base;

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado...${archivo}`))
//     .catch(error => console.log(error));