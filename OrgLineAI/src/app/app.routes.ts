import { Routes } from '@angular/router';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';
import { MyDashboard } from './my-dashboard/my-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'mydashboard', component: MyDashboard}
];
