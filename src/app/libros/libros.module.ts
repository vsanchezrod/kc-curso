import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Es necesario importar FormsModule para usar ngModel en los formularios
import { FormsModule } from '@angular/forms';

// Routing
import { LibrosRoutingModule } from './libros-routing.module';

// Componentes
import { LibrosComponent } from './libros.component';
import { MockBooksComponent } from './mock-books/mock-books.component';

// Servicios
import { MbooksService } from '../services/mbooks.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ],
  declarations: [
    LibrosComponent,
    MockBooksComponent
  ],
  providers: [
    MbooksService
  ]
})
export class LibrosModule { }
