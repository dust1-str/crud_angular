import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { CreateFormComponent } from './create-form/create-form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

export const routes: Routes = [
    { path: 'login', loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
    { path: 'equipos',loadComponent:()=>import('./equipos/equipos.component').then(m=>m.EquiposComponent), canActivate: [authGuard]},
    { path: 'createform', loadComponent:()=>import('./create-form/create-form.component').then(m=>m.CreateFormComponent), canActivate: [authGuard]},
    { path: 'updateform/:id', loadComponent:()=>import('./update-form/update-form.component').then(m=>m.UpdateFormComponent), canActivate: [authGuard]}
];
