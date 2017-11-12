import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MercadosComponent } from './mercados/mercados.component';
import { MercadoComponent } from './mercados/mercado/mercado.component'

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ComercioModule} from './comercio/comercio.module';
import { UsuarioModule} from './usuario/usuario.module';
import { AppRoutingModule } from './app.routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrinhoComponent,
    HomeComponent,
    AboutComponent,
    MercadosComponent,
    MercadoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComercioModule,
    UsuarioModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
