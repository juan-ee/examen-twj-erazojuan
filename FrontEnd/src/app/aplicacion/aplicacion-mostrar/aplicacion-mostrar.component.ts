import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURLService} from "../../services/master-url.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-aplicacion-mostrar',
  templateUrl: './aplicacion-mostrar.component.html',
  styleUrls: ['./aplicacion-mostrar.component.css']
})
export class AplicacionMostrarComponent implements OnInit {
  aplicaciones=[];
  _parametros:any;

  constructor(private _http: Http, private _masterURL: MasterURLService, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarAplicaciones();
  }

  cargarAplicaciones(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._http.get(this._masterURL.url+'aplicacion?cel='+this._parametros.idcel)
        .subscribe(
          (res)=>{
            this.aplicaciones=res.json();
            console.log(this.aplicaciones);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

  actualizarAplicaciones(celular){
    this.aplicaciones.splice(this.aplicaciones.indexOf(celular),1);
  }

}
