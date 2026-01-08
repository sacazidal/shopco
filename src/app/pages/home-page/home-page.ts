import { Component } from '@angular/core';
import { CategoryProductsComponent } from '../../components/category-products/category-products';

@Component({
  selector: 'app-home-page',
  imports: [CategoryProductsComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.less',
})
export class HomePage {}
