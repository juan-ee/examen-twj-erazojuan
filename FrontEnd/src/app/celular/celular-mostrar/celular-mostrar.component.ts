import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURLService} from "../../services/master-url.service";

@Component({
  selector: 'app-celular-mostrar',
  templateUrl: './celular-mostrar.component.html',
  styleUrls: ['./celular-mostrar.component.css']
})
export class CelularMostrarComponent implements OnInit {
  celulares=[];

  constructor(private _http: Http, private _masterURL: MasterURLService) { }

  ngOnInit() {
    this.cargarCelulares();
  }

  cargarCelulares(){
    this._http.get(this._masterURL.url+"celular")
      .subscribe(
        (res)=>{
          this.celulares=res.json();
        },
        (err)=>{
          alert("Ocurrio un error"+err.toString());
        },
      );
  }

  actualizarCelulares(celular){
    this.celulares.splice(this.celulares.indexOf(celular),1);
  }


}
