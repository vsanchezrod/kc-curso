const aDatos = [{ precio: 12 }, { precio: 32 }, { precio: 56 }];
aDatos.push({ precio: 20 });
calcularPrecio(12);
calcularPrecio();

function calcularPrecio(iva = 22) {
    {
        const finalIva = 1 + (iva / 100);
        console.log(finalIva + 1);

        let precioFinal;

        aDatos.forEach(elem => {
            precioFinal = elem.precio * finalIva;
            mostrarPrecio(precioFinal);
        });

    }
}

function mostrarPrecio(precioFinal) {
    console.log(`El precio final es: ${precioFinal.toFixed(2)}`);
}