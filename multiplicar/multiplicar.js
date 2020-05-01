//requireds
const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite) => {
    console.log('*-----------------------------*'.green);
    console.log(`*----Tabla del (${base})----------*`.green);
    console.log('*-----------------------------*'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`El resultado de ${base} * ${i} es... ${base * i}\n`);
    }
}

// let crearArchivo = (base) => {
//     return new Promise((resolve, reject) => {
//         if (!Number(base)) {
//             reject(`"${base}" no es numerico`);
//             return;
//         }
//         let datos = '';
//         for (let i = 1; i <= 10; i++) {
//             datos += `El resultado de ${base} * ${i} es... ${base * i}\n`;
//         }

//         const data = new Uint8Array(Buffer.from('Hello Node.js'));
//         fs.writeFile(`tablas/Tabla-${base}.txt`, datos, (err) => {
//             if (err) reject(err)
//             else
//                 resolve(`tablas/Tabla-${base}.txt`);
//         });
//     });
// }

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`"${base}" no es numerico`);
            return;
        }
        let datos = '';
        for (let i = 1; i <= limite; i++) {
            datos += `El resultado de ${base} * ${i} es... ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/Tabla-${base}.txt`, datos, (err) => {
            if (err) reject(err)
            else
                resolve(`tablas/Tabla-${base}.txt`);
        });
    });
}




module.exports = {
    crearArchivo,
    listarTabla
}