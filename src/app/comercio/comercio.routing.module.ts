import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercioComponent } from './comercio.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CadastroComercioComponent } from './cadastro-comercio/cadastro-comercio.component';
import { AuthGuard } from './auth.guard';

const comercioRoutes: Routes = [
  { path: 'comercio', component: ComercioComponent },
  { path: 'cadastro-comercio', component: CadastroComercioComponent },
  {
    path: 'cadastro-produto',
    component: CadastroProdutoComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COMERCIO'] }
  },
  {
    path: 'listar-produtos',
    component: ListarProdutosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_COMERCIO'] }
  }
];

@NgModule({
    imports: [RouterModule.forChild(comercioRoutes)],
    exports: [RouterModule]
})
export class ComercioRoutingModule {}
