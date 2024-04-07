import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get products(): any[] {
    return this.basketService.products;
  }

  
  constructor(private basketService: BasketService) {}

  addToBasket(product: any): void {
    this.basketService.addToBasket(product);
  }

  removeItem(product: any): void {
    this.basketService.removeItem(product);
  }
}
