import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastroComercioComponent } from './cadastro-comercio/cadastro-comercio.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { EntrarUsuarioComponent } from './entrar-usuario/entrar-usuario.component';
import { EntrarComercioComponent } from './entrar-comercio/entrar-comercio.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ComercioModule} from './comercio/comercio.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroComercioComponent,
    CadastroUsuarioComponent,
    EntrarUsuarioComponent,
    EntrarComercioComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComercioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
