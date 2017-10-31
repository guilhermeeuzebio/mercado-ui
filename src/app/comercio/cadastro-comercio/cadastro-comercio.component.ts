import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ComercioService } from './../comercio.service';
import { Comercio } from './../comercio';

@Component({
  selector: 'mercado-cadastro-comercio',
  templateUrl: './cadastro-comercio.component.html',
  styleUrls: ['./cadastro-comercio.component.css']
})
export class CadastroComercioComponent implements OnInit {

  private comercio:Comercio;

  constructor(private _comercioService:ComercioService, private _router:Router) { }

  ngOnInit() {
    this.comercio=this._comercioService.getterComercio()
  }

  processFormComercio(){
    this._comercioService.criarContaComercio(this.comercio).subscribe((comercio)=>{
      console.log(comercio);
    },(error)=>{
      console.log(error);
    });
  }

}
