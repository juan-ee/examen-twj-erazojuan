import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CelularMostrarComponent} from "./celular/celular-mostrar/celular-mostrar.component";
import {CelularCrearComponent} from "./celular/celular-crear/celular-crear.component";
import {CelularActualizarComponent} from "./celular/celular-actualizar/celular-actualizar.component";

export const routes:Routes=[
   {path:'celulares',component:CelularMostrarComponent},
  {path:'crearcelular',component:CelularCrearComponent},
  {path:'actualizarcelular/:nombre/:sistemaoperativo/:version/:id',component:CelularActualizarComponent}, //
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
