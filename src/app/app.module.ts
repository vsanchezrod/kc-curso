import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule,
    CoreModule,
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
