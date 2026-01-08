import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { DecimalPipe, TitleCasePipe } from '@angular/common';
import { PriceFormatPipe } from '../../pipes/priceFormat/price-format-pipe';

@Component({
  selector: 'app-product',
  imports: [DecimalPipe, PriceFormatPipe, TitleCasePipe],
  templateUrl: './product.html',
  styleUrl: './product.less',
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  fillPercentage: number = 0;

  get discountPercent(): string {
    const current = this.product.price_current;
    const original = this.product.price_original;

    const percent = ((original - current) / original) * 100;
    const percentMath = Math.ceil(percent);

    return `-${percentMath}%`;
  }

  ngOnInit(): void {
    this.calculateFill();
  }

  private calculateFill(): void {
    this.fillPercentage = (this.product.review_rating / 5) * 100;
  }
}
