import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'mercado-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private usuarios:Usuario[];
  constructor(private _usuarioService:UsuarioService, private _router:Router) { }

  ngOnInit() {}

  novoUsuario(){
    let usuario = new Usuario();
    this._usuarioService.setter(usuario);
    this._router.navigate(['/cadastro-usuario']);
  }
}
