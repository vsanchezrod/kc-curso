// Crear clase
class Libro {
    constructor(autor, titulo) {
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this);
        console.log(`El autor es ${this.autor} y el título ${this.titulo}`);
    }
}

class LibroTec extends Libro {
    constructor(autor, titulo, categoria) {
        super(autor, titulo);
        this.categoria = categoria;
    }
}


let libro1 = new LibroTec("Vir", "Pepito", "Angular");

libro1.mostrar();