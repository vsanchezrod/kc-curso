import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // Variable de entrada para recibir la lista de tareas desde el padre
  @Input() items;

  constructor() { }

  ngOnInit() {
  }

}
