import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item: string;

  // Emisor de evento de tipo string. Este evento tiene que ser manejado por el padre
  // Variable de salida para enviar el item al array de tareas
  @Output() eventoAdd: EventEmitter<String>;

  constructor() {
    // En este caso debe ser inicializado en el constructor, ya que en el ngOnInit sería demasiado tarde
    this.eventoAdd = new EventEmitter();
  }

  ngOnInit() {
  }

  // Método añadir tarea
  btnAdd() {

    // Se usa el método emit del evento para emitir en orden ascendente la variable de tipo string item
    this.eventoAdd.emit(this.item);

    // Cuando ya se ha emitido al padre lo borramos para dejar el input en blanco
    this.item = '';
  }


}
