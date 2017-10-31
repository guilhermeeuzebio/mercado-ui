import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';

@Component({
  selector: 'mercado-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  private usuario:Usuario;

  constructor(private _usuarioService:UsuarioService, private _router:Router) { }

  ngOnInit() {
    this.usuario=this._usuarioService.getter()
  }

  processFormUsuario(){
    this._usuarioService.criarContaUsuario(this.usuario).subscribe((usuario)=>{
      console.log(usuario);
    },(error)=>{
      console.log(error);
    });
  }
}
