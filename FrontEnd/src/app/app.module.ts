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
import { AplicacionActualizarComponent } from './aplicacion/aplicacion-actualizar/aplicacion-actualizar.component';
import { AplicacionBorrarComponent } from './aplicacion/aplicacion-borrar/aplicacion-borrar.component';
import { AplicacionCrearComponent } from './aplicacion/aplicacion-crear/aplicacion-crear.component';
import { AplicacionMostrarComponent } from './aplicacion/aplicacion-mostrar/aplicacion-mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    CelularCrearComponent,
    CelularMostrarComponent,
    CelularBorrarComponent,
    CelularActualizarComponent,
    AplicacionActualizarComponent,
    AplicacionBorrarComponent,
    AplicacionCrearComponent,
    AplicacionMostrarComponent,
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
