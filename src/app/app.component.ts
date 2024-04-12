import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BasketService } from './services/basket.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basket';
 

  get basketProductAmount(): number{
    return this.basketService.basketProducts.reduce((totalQuantity: number, currentItem: any) => {
      return totalQuantity + currentItem.quantity;
  }, 0);
  }  

  get authenticated(): boolean {
    return JSON.parse(localStorage.getItem('authenticated') || 'false')
    
  }



  constructor(private basketService: BasketService, private router: Router) {
    console.log(JSON.parse(localStorage.getItem('authenticated') || 'false'))
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }

  
}
