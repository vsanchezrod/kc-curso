import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-control-tareas',
  templateUrl: './control-tareas.component.html',
  styleUrls: ['./control-tareas.component.css']
})
export class ControlTareasComponent implements OnInit {

  // Se decalara la variable
  public tareas: Array<String>;

  constructor() { }

  ngOnInit() {
    // Se inicializa el array de tareas
    this.tareas = [];
  }

  // Métodos para añadir y borrar tareas
  addTarea(tarea) {
    this.tareas.push(tarea);
  }

  deleteTarea(posicion) {
    this.tareas.splice(posicion, 1);
  }

}
