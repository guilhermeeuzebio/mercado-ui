import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ComercioModule} from './comercio/comercio.module';
import { UsuarioModule} from './usuario/usuario.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComercioModule,
    UsuarioModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
