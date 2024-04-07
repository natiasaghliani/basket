import { CanActivateFn, Router } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  // return false;
  const router: Router = inject(Router);
  const isLogedIn = JSON.parse(localStorage.getItem('authenticated') || 'false');
 
  // ნაცვლად თრუს, უნდა წავიკითხოთ ლოკალსთორიჯის დასეტილი მნიშვნელობა
  console.log(isLogedIn)
  if(isLogedIn){
    return true
  } else {
    //ვამისამართებთ ლოგინზე 
    router.navigate(['/login']);

    return false
  }
};
