 import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Login } from './login/login';
import { Dashboard } from './home/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
path: 'dashboard',
component: Dashboard
},
{
  path: 'contact',
  component: Contact
},
  {
    path: 'login',
    component: Login
  }
];