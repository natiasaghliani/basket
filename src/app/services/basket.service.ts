import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basketProducts: any = [];

  constructor() { }

  addToBasket(product: any): void {
    this.basketProducts.push(product);
  }

  removeFromBasket(productId: number): void {
    this.basketProducts = this.basketProducts.filter((item: any) => item.id !== productId);
  }
}
