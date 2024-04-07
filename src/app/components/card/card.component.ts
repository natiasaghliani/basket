import { Component, Input } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input() imageUrl!: string;
  @Input() altText!: string;
  @Input() title!: string;
  @Input() price!: number;
  @Input() discount!: number;
  @Input() quantity: number = 0;
  @Input() maxQuantity!: number;

  @Input() product!: any;


  constructor(private basketService: BasketService) {

  }
}

