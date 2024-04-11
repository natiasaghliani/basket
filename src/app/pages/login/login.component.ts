import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
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

  // ლოკალ სთორიჯს დავუსეტავთ თრუს ელსში ფოლსს
// თუ დაულოგინებელი ხარ, მარტო ლოგინ ფეიჯზე უნდა იყო და სხვაგან ვერ გადადიოდე
// თუ დალოგინებული ხარ,ნავიგაციაში უნდა გვიჩანდეს ლოგ აუთი ლოგინის ნაცვლად
// ლოგ აუტზე დაჭერით უნდა დავლოგაითდეთ
// თუ წარმატებით დალოგინდები მაშინ ლოგინი უნდა იყოს თრუ ლოკალსთორიჯში
// უნდა გამოვიყენო ქენ ექთივეით ან ქენ ლოუდ გარდი

