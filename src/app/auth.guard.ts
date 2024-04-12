import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const isLogedIn = JSON.parse(localStorage.getItem('authenticated') || 'false');
 
  console.log(isLogedIn)
  if(isLogedIn){
    return true
  } else {
    router.navigate(['/login']);

    return false
  }
};
