import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {MasterURLService} from "../../services/master-url.service";
import {Http} from "@angular/http";

@Component({
  selector: 'app-aplicacion-borrar',
  templateUrl: './aplicacion-borrar.component.html',
  styleUrls: ['./aplicacion-borrar.component.css']
})
export class AplicacionBorrarComponent implements OnInit {

  constructor(private _http: Http, private _masterURL: MasterURLService,private router:Router) { }

  ngOnInit() {
  }

  @Input()
  private idABorrar: number;

  @Output()
  private remove = new EventEmitter<any>();

  borrarAplicacion(){
    this._http.delete(this._masterURL.url+"aplicacion/"+this.idABorrar)
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
