import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';

// Componentes
import { ContactosComponent } from './contactos.component';
import { FormVdComponent } from './form-vd/form-vd.component';

@NgModule({
  imports: [
    CommonModule,
    ContactosRoutingModule
  ],
  declarations: [
    ContactosComponent,
    FormVdComponent]
})
export class ContactosModule { }
