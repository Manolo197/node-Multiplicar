const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No has ingresado una base valida, tiene que ser un numero.');
            return
        }
        if (!Number(limite)) {
            reject('No has ingresado un limite valido, tiene que ser un numero.');
            return
        } else {
            let data = '';
            for (let i = 1; i <= limite; i++) {
                data += base + '*' + i + '=' + base * i + '\n';
            };

            fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(`tabla-${base}-${limite}.txt`);
                }
            });
        }

    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base))
            reject(`La base '${base}' no es un valor valido, debe ser un numero.`)
        if (!Number(limite))
            reject(`El limite '${limite}' no es valor valido, debe ser un numero`)
        else {
            data = '';
            for (let i = 1; i <= limite; i++) {
                data += `${base} *  ${i} = ${base * i} \n`;
            };
            resolve(data);
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
};