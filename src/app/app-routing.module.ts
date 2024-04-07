import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { outGuard } from './out.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [authGuard]
  },
  {
    path: 'basket',
    loadChildren: () => import('./pages/basket/basket.module').then(m => m.BasketModule),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate: [outGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
