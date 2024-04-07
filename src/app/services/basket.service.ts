import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasketService {

  products = [
    {
      id: 1,
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      altText:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper',
      title: 'Earthen Bottle',
      price: 48,
      discount: 20,
      maxQuantity: 10,
      quantity: 0,
    },
    {
      id: 2,
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      altText:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
      title: 'Nomad Tumbler',
      price: 35,
      discount: 15,
      maxQuantity: 7,
      quantity: 0,

    },
    {
      id: 3,
      imageUrl:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      altText:
        'Person using a pen to cross a task off a productivity paper card',
      title: 'Focus Paper Refill',
      price: 89,
      discount: 45,
      maxQuantity: 12,
      quantity: 0,

    },
    {
      id: 4,
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      altText:
        'Hand holding black machined steel mechanical pencil with brass tip and top.',
      title: 'Machined Mechanical Pencil',
      price: 35,
      discount: 20,
      maxQuantity: 8,
      quantity: 0,
    },
    {
      id: 5,
      imageUrl:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      altText:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper',
      title: 'Earthen Bottle',
      price: 48,
      discount: 13,
      maxQuantity: 5,
      quantity: 0,

    },
  ];
  public basketProducts: any = [];

  constructor() {
    const storedBasket = localStorage.getItem('basket');

    if (storedBasket) {
      this.basketProducts = JSON.parse(storedBasket);
      // for (let basketItems of this.basketProducts) {
      //   if (basketItems.id === this.basketProducts.id) {
      //     basketItems.quantity = this.basketProducts.quantity
      //   }
      // }
      this.basketProducts.forEach((element: any) => {
        const findItem = this.products.find((item: any) => item.id === element.id) 
        // console.log('111111111', element, findItem)
        
        if (findItem && element.id === findItem?.id) {
          
          findItem.quantity = element.quantity
        }
      });

      console.log(this.products)

      // ციკლით ვუვლით ბასკეტპროდაქტს
      // თითოეული აითემისთვის ვეძებთ შესაბამის აითემს პროდაქტსის ერეიში
      // თუ ვიპოვეთ, ბასკეტის ქუანთითის ვანიჭებთ პროდაქთის ქუანთითის

    }
  }

  // addToBasket(product: any): void {
  //   this.basketProducts.push(product);
  //   localStorage.setItem('basket', JSON.stringify(this.basketProducts));
  // }

  removeFromBasket(productId: number): void {
    // this.basketProducts = this.basketProducts.filter((item: any) => item.id !== productId);

    const index = this.basketProducts.findIndex(
      (item: any) => item.id === productId
    );

    if (index !== -1) {
      const product = this.basketProducts[index];

      if (product.quantity > 1) {
        product.quantity--;
      } else {
        this.basketProducts.splice(index, 1);
      }

      localStorage.setItem('basket', JSON.stringify(this.basketProducts));
    }
  }

  addToBasket(product: any): void {
    const findProduct = this.basketProducts.find(
      (element: any) => element.id === product.id
    );
    console.log(findProduct, product, this.basketProducts);

    if (findProduct) {
      if (findProduct.quantity < findProduct.maxQuantity) {
        findProduct.quantity++;
      } else {
        console.log('Maximum quantity reached for this item.');
      }
    } else {
      product.quantity = 1;
      this.basketProducts.push(product);
    }

    localStorage.setItem('basket', JSON.stringify(this.basketProducts));
  }

  removeItem(product: any): void {
    const findProduct = this.basketProducts.find(
      (element: any) => element.id === product.id
    );
    const index = this.basketProducts.findIndex(
      (item: any) => item.id === product.id
    );

    if (index !== -1) {
      if (findProduct.quantity > 0) {
        findProduct.quantity--;
      } if (findProduct.quantity === 0) {
        this.basketProducts.splice(index, 1);
      }
    }
    localStorage.setItem('basket', JSON.stringify(this.basketProducts));
  }
}

// თუ არის უკვე პროდუქტი მაშინ მარტო ვზრდით რაოდენობას შესაბამის p-ში
// თუ არ არის პროდქტი მაშინ ვფუშავთ
// წაშლის დროს უნდა დააკლდეს რაოდენობა
