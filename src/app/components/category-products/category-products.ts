import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsComponent } from '../products/products';
import { ProductSortType } from '../../interfaces/product';

@Component({
  selector: 'app-category-products',
  imports: [RouterLink, ProductsComponent],
  templateUrl: './category-products.html',
  styleUrl: './category-products.less',
})
export class CategoryProductsComponent {
  @Input() title: string | null = null;
  @Input() sortType: ProductSortType = 'created_at_desc';
}
