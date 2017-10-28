import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ComercioService } from '../comercio.service';
import { Produto } from './../produto';

@Component({
  selector: 'mercado-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  private produtos:Produto[];
  constructor(private _comercioService:ComercioService, private _router:Router) { }

  ngOnInit() {
    this._comercioService.getProdutos().subscribe((produtos)=>{
      console.log(produtos);
      this.produtos=produtos;
    },(error)=>{
      console.log(error);
    })
  }
  excluirProduto(produto){
    this._comercioService.excluirProduto(produto.idProduto).subscribe((data)=>{
      this.produtos.splice(this.produtos.indexOf(produto),1);
    },(error)=>{
      console.log(error);
    });
  }

  editarProduto(produto){
    this._comercioService.setter(produto);
    this._router.navigate(['/cadastro-produto']);
  }
  novoProduto(){
    let produto = new Produto();
    this._comercioService.setter(produto);
    this._router.navigate(['/cadastro-produto']);
  }

}
