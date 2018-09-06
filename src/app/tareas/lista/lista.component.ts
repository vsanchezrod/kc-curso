import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // Variable de entrada para recibir la lista de tareas desde el padre
  @Input() items;

  // Se crea una output para informar al componente padre de que se quiere borrar una tarea
  @Output() eventBorrar: EventEmitter<number>;

  constructor() {
    this.eventBorrar = new EventEmitter();
   }

  ngOnInit() {
  }

  btnBorrar(posicion) {
    this.eventBorrar.emit(posicion);
  }
}
