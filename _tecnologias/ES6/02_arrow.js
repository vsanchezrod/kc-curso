let oDatos = { precio: 15, iva: 1.16 };
console.log(oDatos);

console.log(oDatos);
oDatos.calcularIvaAsync = function() {
    setTimeout(() => {
        let precioFinal = this.precio * this.iva;
        console.log(`Usando una función clásica: El precio final es ${precioFinal.toFixed(2)}`);
    }, 1000);
};

oDatos.calcularIvaAsync();