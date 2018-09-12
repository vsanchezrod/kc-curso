import { Injectable } from '@angular/core';

// Importa Observable
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbooksService {

  public libros: Array<string>;

  constructor() {
    // Lo inicializamos con valores
    this.libros = ['Introducción a Angular', 'Angular a fondo', 'Angular avanzado'];
  }

  // Métodos del servicio para devolver información
  getLibros(clave: string) {

    const LIBROSBUSQUEDA: Array<string> = [];

    clave = clave.toLowerCase();

    for (const libro of this.libros) {
      if (libro.indexOf(clave) >= 0) {
        LIBROSBUSQUEDA.push(libro);
      }
    }

    return LIBROSBUSQUEDA;
  }

  // Método que simula mejor el proceso de consulta a un servidor
  // Método que devuelve en 2 seg, un mensaje de que ya tiene los datos, a cualquiera que esté escuchando
  getLibros$(clave: string) {
    // Devuelve un observable
    return new Observable(
      (observer) => {
         setTimeout( () => {
           // Método next, emisión de información a cualquier suscritor que esté escuchando este observable
           observer.next(this.libros);
         }, 2000);
      }
    );
  }
}
