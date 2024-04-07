import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { DiscountPipe } from 'src/app/discount.pipe';



@NgModule({
  declarations: [
    CardComponent,
    DiscountPipe

  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    DiscountPipe
  ]
})
export class CardModule { }
