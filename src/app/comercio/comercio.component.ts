import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Comercio } from './comercio'
import { ComercioService } from './comercio.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'mercado-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})
export class ComercioComponent implements OnInit {

  constructor(private _comercioService:ComercioService, private auth:AuthService, private _router:Router, private comercio:Comercio){ }

  ngOnInit() {}

  login() {
    this.auth.login(this.comercio.email, this.comercio.senha)
    .then(
      result => {
        this._router.navigate(['/listar-produtos']);
      })
  }

  novoComercio(){
    let comercio = new Comercio();
    this._comercioService.setterComercio(comercio);
    this._router.navigate(['/cadastro-comercio']);
  }

}
