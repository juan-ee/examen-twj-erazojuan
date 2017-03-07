import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {MasterURLService} from "../../services/master-url.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-aplicacion-actualizar',
  templateUrl: './aplicacion-actualizar.component.html',
  styleUrls: ['./aplicacion-actualizar.component.css']
})
export class AplicacionActualizarComponent implements OnInit {
  aplicacionAEditar:any;
  cel;
  rutaImg:string;

  constructor(private _activetedRoute:ActivatedRoute, private _http:Http, private _masterURL:MasterURLService, private router:Router) {
    this.rutaImg="assets/images/editar.jpeg";
  }

  ngOnInit() {
    this._activetedRoute.params.subscribe(parametros=>{
      this.aplicacionAEditar=parametros;
      this.cel=this.aplicacionAEditar.cel;
      alert(this.cel);
      this.aplicacionAEditar={
        nombre:this.aplicacionAEditar.nombre,
        version:this.aplicacionAEditar.tamanio,
        tamanio:this.aplicacionAEditar.version,
        id:this.aplicacionAEditar.id
      };

    });
  }

  actualizarAplicacion(){
    this._http.put(this._masterURL.url+"aplicacion/"+this.aplicacionAEditar.id,this.aplicacionAEditar).subscribe(
      (res)=>{
        console.log('se edito:',res.json());
        this.router.navigate(['/aplicaciones',this.cel]);
      },
      (err)=>{
        console.log("Ocurrio un error",err);
      },
    );
  }

}
