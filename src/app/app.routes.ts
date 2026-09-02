    import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'home',
         // component: Home not lazy laoding
         //Below is lazyloading
        loadComponent:()=> import('./home/home').then(m => m.Home),
        loadChildren:()=> import('./home/home.routes').then(m => m.routes)
    },
    {  path: 'about',
       loadComponent:()=> import('./about/about').then(m => m.About)
    }];