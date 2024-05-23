import { Routes } from '@angular/router';
import { ConsultaProfissionaisComponent } from './consulta-profissionais/consulta-profissionais.component';
import { AutenticarUsuarioComponent } from './autenticar-usuario/autenticar-usuario.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { CadastroProfissionaisComponent } from './cadastro-profissionais/cadastro-profissionais.component';
import { EdicaoProfissionaisComponent } from './edicao-profissionais/edicao-profissionais.component';
import { ConsultaServicosComponent } from './consulta-servicos/consulta-servicos.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/autenticar-usuario'
    },
    {
        path: 'autenticar-usuario',
        component: AutenticarUsuarioComponent
    },
    {
        path: 'criar-usuario',
        component: CriarUsuarioComponent
    },
    {
        path: 'profissionais-consulta',
        component: ConsultaProfissionaisComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profissionais-cadastro',
        component: CadastroProfissionaisComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profissionais-edicao/:id',
        component: EdicaoProfissionaisComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'servicos-consulta',
        component: ConsultaServicosComponent,
        canActivate: [AuthGuard]
    }
];
