import { Component, OnInit } from '@angular/core';
import {MasterURLService} from "../../services/master-url.service";
import {Http} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-celular-actualizar',
  templateUrl: './celular-actualizar.component.html',
  styleUrls: ['./celular-actualizar.component.css']
})
export class CelularActualizarComponent implements OnInit {
  celularAEditar;
  rutaImg="assets/images/editar.jpeg";

  constructor(private _activetedRoute:ActivatedRoute, private _http:Http, private _masterURL:MasterURLService, private router:Router) { }

  ngOnInit() {
    this._activetedRoute.params.subscribe(parametros=>{
      this.celularAEditar=parametros;
      this.celularAEditar={
        nombre:this.celularAEditar.nombre,
        sistemaoperativo:this.celularAEditar.sistemaoperativo,
        version:this.celularAEditar.version,
        id:this.celularAEditar.id
      };

    });
  }

  actualizarCelular(){
    this._http.put(this._masterURL.url+"celular/"+this.celularAEditar.id,this.celularAEditar).subscribe(
      (res)=>{
        console.log('se edito:',res.json());
        this.router.navigate(['/celulares']);
      },
      (err)=>{
        console.log("Ocurrio un error",err);
      },
    );
  }

}
