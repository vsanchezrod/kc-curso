import { Component, OnInit } from '@angular/core';

// Servicios
import { MbooksService } from '../../services/mbooks.service';

@Component({
  selector: 'kc-mock-books',
  templateUrl: './mock-books.component.html',
  styleUrls: ['./mock-books.component.css']
})
export class MockBooksComponent implements OnInit {

  // Variable donde se va a recoger el valor de búsqueda
  public clave: string;

  // Array para guardar los datos de búsqueda. Se podría crear un objeto de tipo libro con titulo, autor...
  public libros: Array<string>;

  constructor(private mbooksService: MbooksService) { }

  ngOnInit() {

    // Como es un string no es necesario inicializarla, pero aun así lo hacemos
    this.clave = '';
    this.libros = [];
  }

  // Métodos
  btnBuscar() {
    // Se utiliza el método del servicio para llamar al método que obtiene la info con los libros y se guarda en la variable libros
    this.libros = this.mbooksService.getLibros(this.clave);
  }

  btnBuscarRx() {
    // A través del servicio y el método getLibros$ nos vamos a suscribir
    this.mbooksService.getLibros$(this.clave)
    .subscribe(
      // Función que procesa los cambios cuanto estos lleguen
      (response: any) => { this.libros = response; }
    );
  }


}
