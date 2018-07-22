// Para manejar asincronías. Devuelve algo asincrónico con dos posibles estados: resolve(correcto) y reject(erróneo)
function hacerAlgoPromesa() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Hacer algo que ha ocuperado un tiempo');
            let number = Math.random();
            if (number < 0.7) {
                resolve(number); // Correcto . La promesa se resuelve correctamente
            } else {
                reject(number); // Incorrecto - La promesa se rechaza
            }
        }, 2000);

    })
}

hacerAlgoPromesa()
    .then((data) => { console.log('El resultado es', data) }) // Solo se ejecutará cuando la promesa se resuelva de forma acertada
    .catch((error) => { console.error('El error es', error) }); // Solo se ejecutará cuando haya un error.