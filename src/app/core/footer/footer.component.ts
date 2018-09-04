import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public autor: string;
  public empresa: string;

  constructor() { }

  ngOnInit() {
    this.autor = 'Vir Sánchez';
    this.empresa = 'Vir Company';
  }

}
