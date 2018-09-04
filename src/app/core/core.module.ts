import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes del módulo Core
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeadComponent,
    FooterComponent,
    MenuComponent,
    MainComponent
  ],
  // Para poder exportar los componentes a otro módulo
  exports: [
    HeadComponent,
    FooterComponent,
    MenuComponent,
    MainComponent
  ]
})
export class CoreModule { }
