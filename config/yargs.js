const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argumentos = require('yargs')
    .command('listar', 'Imprime en consola', opt)
    .command('Crear', 'Crea un archivo .txr', opt)
    .argv;

module.exports = {
    argumentos
}