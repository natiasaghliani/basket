import { Component } from '@angular/core';
import { BasketService } from './services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basket';

  get basketProductAmount(): number{
    return this.basketService.basketProducts.length
  }  
  constructor(private basketService: BasketService) {}
}
