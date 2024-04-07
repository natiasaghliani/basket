import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale',
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number): number {
    if (price <= 0 || discount <= 0) {
      return 0;
    }

    const sale = ((price - discount) / price) * 100;
    return Math.round(sale)
  }
}
