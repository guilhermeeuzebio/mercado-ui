import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Produto } from './produto';
import { Comercio } from './comercio';

@Injectable()
export class ComercioService {

  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private produto:Produto;
  private comercio:Comercio;

  constructor(private _http:Http, private http: HttpClient) { }

  getProdutos(){
    return this._http.get(this.baseUrl+'/produtos',this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  getProduto(idProduto:number){
    return this._http.get(this.baseUrl+'/produto/'+idProduto,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  excluirProduto(idProduto:number){
    return this._http.delete(this.baseUrl+'/produto/'+idProduto,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  criarProduto(produto:Produto){
    return this._http.post(this.baseUrl+'/produto',JSON.stringify(produto), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  editarProduto(produto:Produto){
    return this._http.put(this.baseUrl+'/produto',JSON.stringify(produto), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
  let formdata: FormData = new FormData();

  formdata.append('file', file);

  const req = new HttpRequest('POST', this.baseUrl+'/produto/imagem', formdata, {
    reportProgress: true,
    responseType: 'text'
  });

    return this.http.request(req);
  }

  getFiles(): Observable<string[]> {
    return this.http.get(this.baseUrl+'/getallfiles')
  }

  criarContaComercio(comercio:Comercio){
    return this._http.post(this.baseUrl+'/comercio',JSON.stringify(comercio), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }

  setter(produto:Produto){
    this.produto=produto;
  }
  getter(){
    return this.produto;
  }

  setterComercio(comercio:Comercio){
    this.comercio=comercio;
  }
  getterComercio(){
    return this.comercio;
  }

}
