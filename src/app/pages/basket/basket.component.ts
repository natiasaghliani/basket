import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  get basketProducts(): any[] {
    return this.basketService.basketProducts;
  }

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    console.log(this.basketService.basketProducts);
  }

  removeFromBasket(productId: number): void {
    this.basketService.removeFromBasket(productId);
    console.log(this.basketService.basketProducts);
    
  }
}
