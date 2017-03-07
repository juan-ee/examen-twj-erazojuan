import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {MasterURLService} from "../../services/master-url.service";

@Component({
  selector: 'app-celular-mostrar',
  templateUrl: './celular-mostrar.component.html',
  styleUrls: ['./celular-mostrar.component.css']
})
export class CelularMostrarComponent implements OnInit {

  constructor(private _http: Http, private _masterURL: MasterURLService) { }

  ngOnInit() {
  }

}
