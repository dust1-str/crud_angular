import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EquiposComponent } from './equipos/equipos.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent, canActivate: [authGuard]},
    { path: 'empleados', component: EmpleadosComponent, canActivate: [authGuard] },
    {path: 'equipos',component:EquiposComponent,canActivate:[authGuard]}
];
