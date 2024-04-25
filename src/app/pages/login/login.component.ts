import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = 'admin';
  password: string = 'admin';
  errorMessage: string = '';
  

  constructor(private router: Router) {}

  login(): void {

    if (this.email === 'admin' && this.password === 'admin') {
   
      localStorage.setItem('authenticated', 'true')
      this.router.navigate(['']);

    } else {
      localStorage.setItem('authenticated', 'false')
      this.errorMessage = 'Invalid password or user';
    }
  }
}


