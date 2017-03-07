import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CelularMostrarComponent} from "./celular/celular-mostrar/celular-mostrar.component";
import {CelularCrearComponent} from "./celular/celular-crear/celular-crear.component";

export const routes:Routes=[
   {path:'celulares',component:CelularMostrarComponent},
  {path:'crearcelular',component:CelularCrearComponent},
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
