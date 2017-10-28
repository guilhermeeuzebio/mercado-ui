import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ComercioComponent} from './comercio.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ComercioRoutingModule } from './comercio.routing.module';
import { ComercioService } from './comercio.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ComercioRoutingModule
  ],
  exports: [],
  declarations: [
	ComercioComponent,
	CadastroProdutoComponent, 
	ListarProdutosComponent
  ],
  providers: [ComercioService],
})
export class ComercioModule { }
