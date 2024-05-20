import { Routes } from '@angular/router';
import { ConsultaProfissionaisComponent } from './consulta-profissionais/consulta-profissionais.component';
import { AutenticarUsuarioComponent } from './autenticar-usuario/autenticar-usuario.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { AuthGuard } from './guards/auth.guard';

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
    }
];
