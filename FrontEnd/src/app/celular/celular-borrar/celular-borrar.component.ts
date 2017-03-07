import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MasterURLService} from "../../services/master-url.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-celular-borrar',
  templateUrl: './celular-borrar.component.html',
  styleUrls: ['./celular-borrar.component.css']
})
export class CelularBorrarComponent implements OnInit {

  constructor(private _http: Http, private _masterURL: MasterURLService,private router:Router) {

  }

  ngOnInit() {
  }


  @Input()
  private idABorrar: number;

  @Output()
  private remove = new EventEmitter<any>();

  borrarCelular(){
    this._http.delete(this._masterURL.url+"celular/"+this.idABorrar)
      .subscribe(
        (res)=>{
          this.remove.emit();
        },
        (err)=>{
          console.log(err);
        }
      );
  }


}
