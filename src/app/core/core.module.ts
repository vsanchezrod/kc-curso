import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes del módulo Core
import { HeadComponent } from './head/head.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeadComponent
  ],
  // Para poder exportar los componentes a otro módulo
  exports: [
    HeadComponent
  ]
})
export class CoreModule { }
