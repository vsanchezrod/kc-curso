import { Component, OnInit } from '@angular/core';

// Importo el modelo de datos Contacto
import { Contacto } from '../../models/contacto.model';
import { Grupo } from '../../models/grupo.model';
import { Sector } from '../../models/sector.model';

// Importo las constantes del maestro.datos.ts
import { GRUPOS, SECTORES } from '../../models/maestro.datos';

@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css']
})
export class FormVdComponent implements OnInit {

  // Creo una variable del tipo de Modelo de datos creado
  public contacto: Contacto;

  public grupos: Array<Grupo>;
  public sectores: Array<Sector>;


  constructor() { }

  ngOnInit() {
    // Se inicializa la variable Contacto
    this.contacto = new Contacto();
    this.grupos = GRUPOS;
    this.sectores = SECTORES;
  }

}
