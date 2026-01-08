import { Component } from '@angular/core';
import { ProductsComponent } from '../../components/products/products';

@Component({
  selector: 'app-products-page',
  imports: [ProductsComponent],
  templateUrl: './products-page.html',
  styleUrl: './products-page.less',
})
export class ProductsPage {}
