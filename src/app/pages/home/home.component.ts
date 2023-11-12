import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private basketService: BasketService) {}

  addToBasket(product: any): void {
    this.basketService.addToBasket(product);
  }
  
  products = [
    {
      id: 1,
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      altText:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper',
      title: 'Earthen Bottle',
      price: '$48',
    },
    {
      id: 2,
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      altText:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
      title: 'Nomad Tumbler',
      price: '$35',
    },
    {
      id: 3,
      imageUrl:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      altText:
        'Person using a pen to cross a task off a productivity paper card',
      title: 'Focus Paper Refill',
      price: '$89',
    },
    {
      id: 4,
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      altText:
        'Hand holding black machined steel mechanical pencil with brass tip and top.',
      title: 'Machined Mechanical Pencil',
      price: '$35',
    },
    {
      id: 5,
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      altText:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper',
      title: 'Earthen Bottle',
      price: '$48',
    },
  ];
}
