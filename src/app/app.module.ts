import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para usar formularios y la directiva ngModel
import { FormsModule } from '@angular/forms';

// Se va a encargar de todo el proceso de enrutamiento
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Se importa el módulo core (estructura o layout de la APP)
import { CoreModule } from './core/core.module';

// Se importan los módulos funcionales (del menú)
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
