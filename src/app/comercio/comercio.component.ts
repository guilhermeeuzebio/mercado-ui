import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Comercio } from './comercio'
import { ComercioService } from './comercio.service';

@Component({
  selector: 'mercado-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})
export class ComercioComponent implements OnInit {

  constructor(private _comercioService:ComercioService, private _router:Router){ }

  ngOnInit() {}

  novoComercio(){
    let comercio = new Comercio();
    this._comercioService.setterComercio(comercio);
    this._router.navigate(['/cadastro-comercio']);
  }

}
