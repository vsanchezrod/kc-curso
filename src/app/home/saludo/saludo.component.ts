import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  public nombreUsuario: string;

  constructor() { }

  ngOnInit() {
    this.nombreUsuario = 'Vir';
  }

  // Método para borrar el nombre del usuario
  btnBorrarNombre(ev) {
    console.log(ev);
    this.nombreUsuario = '';
  }


}
