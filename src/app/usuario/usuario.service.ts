import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private usuario:Usuario;

  constructor(private _http:Http) { }

  criarContaUsuario(usuario:Usuario){
    return this._http.post(this.baseUrl+'/usuario',JSON.stringify(usuario), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }

  setter(usuario:Usuario){
    this.usuario=usuario;
  }

  getter(){
    return this.usuario;
  }

}
