import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const outGuard: CanActivateFn = (route, state) => {
  // return true;

  const router: Router = inject(Router);
  const isLogedIn = JSON.parse(localStorage.getItem('authenticated') || 'false');
 


  if(isLogedIn){
    
    router.navigate(['']);
    return false
  } else {
   

    return true
  }
};
