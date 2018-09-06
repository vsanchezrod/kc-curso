import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


// Componentes
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent, SaludoComponent]
})
export class HomeModule { }
