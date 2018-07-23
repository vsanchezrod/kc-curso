// Crear clase
class Libro implements Autor {

    // Se han de definir las propiedades de la clase antes del constructor
    nombre_autor: string;
    apellido_autor: string;

    titulo: string;

    constructor(autor, titulo) {
        this.nombre_autor = autor;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this);
        console.log(`El autor es ${this.nombre_autor} y el título ${this.titulo}`);
    }
}

class LibroTec extends Libro {

    categoria: string;

    constructor(autor, titulo, categoria) {
        super(autor, titulo);
        this.categoria = categoria;
    }

    // Se pueden modificar o sobreescribir métodos de la clase padre
    mostrar() {
        super mostrar();
        console.log(this);
    }
}

let libro = new LibroTec('Vir', 'Programadora', 'Categoria');


// Crear interface

interface Autor {
    nombre_autor: string;
    apellido_autor: string;
}
