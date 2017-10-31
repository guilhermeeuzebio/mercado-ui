import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';

const appRoutes: Routes = [
  { path: 'carrinho', component: CarrinhoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
