import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  // Se declaran las variables de la clase
  public title: string;

  constructor() { }

  ngOnInit() {
    //title = 'KeepCoding!!!';
    //logo = './assets/logo_angular.svg';
  }

}
