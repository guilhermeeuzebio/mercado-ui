import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioComponent } from './usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsuarioRoutingModule
  ],
  declarations: [
    UsuarioComponent,
    CadastroUsuarioComponent
  ],
  providers: [UsuarioService],

})
export class UsuarioModule { }
