import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntrarUsuarioComponent } from './entrar-usuario/entrar-usuario.component';
import { EntrarComercioComponent } from './entrar-comercio/entrar-comercio.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroComercioComponent } from './cadastro-comercio/cadastro-comercio.component';

const appRoutes: Routes = [
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'entrar-usuario', component: EntrarUsuarioComponent },
  { path: 'entrar-comercio', component: EntrarComercioComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'cadastro-comercio', component: CadastroComercioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
