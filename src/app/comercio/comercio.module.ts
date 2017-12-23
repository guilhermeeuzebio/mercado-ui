import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';

import { ComercioComponent} from './comercio.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CadastroComercioComponent } from './cadastro-comercio/cadastro-comercio.component';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';
import { AuthService } from './auth.service';
import { MoneyHttp } from './money-http';
import { ComercioRoutingModule } from './comercio.routing.module';
import { ComercioService } from './comercio.service';
import { Comercio } from './comercio';

export function authHttpServiceFactory(auth: AuthService, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]
  });

  return new MoneyHttp(auth, config, http, options);
}

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
	ListarProdutosComponent,
  CadastroComercioComponent
  ],
  providers: [
      {
        provide: AuthHttp,
        useFactory: authHttpServiceFactory,
        deps: [AuthService, Http, RequestOptions]
      },
      AuthService,
      JwtHelper,
      Comercio,
      ComercioService,
      AuthGuard,
      LogoutService
  ]
})
export class ComercioModule { }
