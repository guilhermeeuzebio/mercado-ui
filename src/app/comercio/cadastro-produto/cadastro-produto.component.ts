import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
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
  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }

  constructor(private _comercioService:ComercioService, private _router:Router) { }

  ngOnInit() {
    this.produto=this._comercioService.getter()
  }

  selectFile(event) {
     this.selectedFiles = event.target.files;
   }
/*
   upload() {
     this.progress.percentage = 0;

     this.currentFileUpload = this.selectedFiles.item(0)
     this._comercioService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
       if (event.type === HttpEventType.UploadProgress) {
         this.progress.percentage = Math.round(100 * event.loaded / event.total);
       } else if (event instanceof HttpResponse) {
         console.log('File is completely uploaded!');
       }
     })

     this.selectedFiles = undefined
   }
*/
  processForm(){
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0)
    this._comercioService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    })
    this.selectedFiles = undefined
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
