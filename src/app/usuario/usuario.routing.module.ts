import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const UsuarioRoutes: Routes = [
    { path: 'usuario', component: UsuarioComponent },
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forChild(UsuarioRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}
