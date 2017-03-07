import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CelularMostrarComponent} from "./celular/celular-mostrar/celular-mostrar.component";
import {CelularCrearComponent} from "./celular/celular-crear/celular-crear.component";
import {CelularActualizarComponent} from "./celular/celular-actualizar/celular-actualizar.component";
import {AplicacionMostrarComponent} from "./aplicacion/aplicacion-mostrar/aplicacion-mostrar.component";
import {AplicacionCrearComponent} from "./aplicacion/aplicacion-crear/aplicacion-crear.component";

export const routes:Routes=[
   {path:'celulares',component:CelularMostrarComponent},
  {path:'crearcelular',component:CelularCrearComponent},
  {path:'actualizarcelular/:nombre/:sistemaoperativo/:version/:id',component:CelularActualizarComponent},
  {path:'aplicaciones/:idcel',component:AplicacionMostrarComponent},
  {path:'crearaplicacion/:idcel',component:AplicacionCrearComponent},
];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
