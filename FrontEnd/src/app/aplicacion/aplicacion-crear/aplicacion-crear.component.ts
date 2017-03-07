import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {MasterURLService} from "../../services/master-url.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-aplicacion-crear',
  templateUrl: './aplicacion-crear.component.html',
  styleUrls: ['./aplicacion-crear.component.css']
})
export class AplicacionCrearComponent implements OnInit {
  rutImgIzq:string;
  rutimgDer:string;
  _parametro:any;
  nuevaAplicacion = {};

  constructor(private _http: Http, private _masterURL: MasterURLService, private router:Router,private _activetedRoute:ActivatedRoute) {
    this.rutImgIzq="assets/images/aplicacion/izq.jpg";
    this.rutimgDer="assets/images/aplicacion/apps.jpg";
  }

  ngOnInit() {
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametro=parametros;
      this.nuevaAplicacion={
        cel:this._parametro.idcel
      }
    });
  }

  crearAplicacion() {
    this._http.post(this._masterURL.url + "aplicacion",this.nuevaAplicacion).subscribe(
      (res) => {
        console.log('Se creo:',res.json());
        this.router.navigate(['/aplicaciones',this._parametro.idcel]);
        this.nuevaAplicacion={};
        this.nuevaAplicacion={
          cel:this._parametro.idcel
       }
      },
      (err) => {
        alert("Ocurrio un error"+err.toString());
      }
    );
  }
}
