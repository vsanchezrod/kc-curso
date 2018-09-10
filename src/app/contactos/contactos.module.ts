import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';

// Componentes
import { ContactosComponent } from './contactos.component';
import { FormVdComponent } from './form-vd/form-vd.component';

// Módulos importados
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactosRoutingModule
  ],
  declarations: [
    ContactosComponent,
    FormVdComponent]
})
export class ContactosModule { }
