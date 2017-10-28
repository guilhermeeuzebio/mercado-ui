import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ComercioService } from './../comercio.service';
import { Produto } from './../produto';

@Component({
  selector: 'mercado-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

 private produto:Produto;

  constructor(private _comercioService:ComercioService, private _router:Router) { }

  ngOnInit() {
    this.produto=this._comercioService.getter()
  }

  processForm(){
    if(this.produto.idProduto==undefined){
      this._comercioService.criarProduto(this.produto).subscribe((produto)=>{
        console.log(produto);
      },(error)=>{
        console.log(error);
      });
    }else{
      this._comercioService.editarProduto(this.produto).subscribe((produto)=>{
        console.log(produto);
      },(error)=>{
        console.log(error);
      });
    }
  }
}
