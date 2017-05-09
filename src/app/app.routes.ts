import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { RakComponent } from './rak/rak.component';
import { AnggotaComponent } from './anggota/anggota.component';
import { BukuComponent } from './buku/buku.component';
import { KategoriComponent } from './kategori/kategori.component';
import { DendaComponent } from './denda/denda.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'rak', component: RakComponent, canActivate: [AuthGuard]},
    {path: 'anggota', component: AnggotaComponent, canActivate: [AuthGuard]},
    {path: 'buku', component: BukuComponent, canActivate: [AuthGuard]},
    {path: 'kategori', component: KategoriComponent, canActivate: [AuthGuard]},
    {path: 'denda', component: DendaComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
]

export const routing = RouterModule.forRoot(routes);