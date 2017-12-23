import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Comercio } from './../comercio/comercio'
import { ComercioService } from './../comercio/comercio.service';

@Component({
  selector: 'mercado-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _comercioService:ComercioService, private _router:Router) { }

  ngOnInit() {
  }

  comercio(){
    let comercio = new Comercio();
    this._comercioService.setterComercio(comercio);
    this._router.navigate(['/comercio']);
  }

}
