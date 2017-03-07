import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURLService} from "../../services/master-url.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-celular-crear',
  templateUrl: './celular-crear.component.html',
  styleUrls: ['./celular-crear.component.css']
})
export class CelularCrearComponent implements OnInit {
  rutImgIzq:string;
  rutimgDer:string;
  nuevoCelular = {};

  constructor(private _http: Http, private _masterURL: MasterURLService, private router:Router) {
    this.rutImgIzq="assets/images/celular/izq.jpg";
    this.rutimgDer="assets/images/celular/der.png";
  }

  ngOnInit() {
  }

  crearCelular() {
    this._http.post(this._masterURL.url + "celular",this.nuevoCelular).subscribe(
      (res) => {
        console.log('Se creo:',res.json());
        this.router.navigate(['/celulares']);
        this.nuevoCelular={};
      },
      (err) => {
        alert("Ocurrio un error"+err.toString());
      }
    );
  }

}
