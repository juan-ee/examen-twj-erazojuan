import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {routing} from "./app.routes";
import { CelularCrearComponent } from './celular/celular-crear/celular-crear.component';
import { CelularMostrarComponent } from './celular/celular-mostrar/celular-mostrar.component';
import { CelularBorrarComponent } from './celular/celular-borrar/celular-borrar.component';
import { CelularActualizarComponent } from './celular/celular-actualizar/celular-actualizar.component';
import {MasterURLService} from "./services/master-url.service";

@NgModule({
  declarations: [
    AppComponent,
    CelularCrearComponent,
    CelularMostrarComponent,
    CelularBorrarComponent,
    CelularActualizarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MasterURLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
