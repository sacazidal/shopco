import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product';
import { Product, ProductSortType } from '../../interfaces/product';
import { ApiService } from '../../services/api/api';
import { catchError, finalize, Observable, of, tap } from 'rxjs';
import { AsyncPipe, NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, AsyncPipe, RouterLink, NgStyle],
  templateUrl: './products.html',
  styleUrl: './products.less',
})
export class ProductsComponent implements OnInit {
  @Input() columns: number = 4;

  @Input() title: string | null = null;
  @Input() sortType: ProductSortType = 'created_at_desc';
  @Input() limit: number = 4;
  @Input() offset: number = 0;

  products$!: Observable<Product[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products$ = this.apiService.getProducts(this.sortType, this.limit, this.offset).pipe(
      tap(() => {}),
      catchError((err) => {
        console.error('Error loadProducts()', err);
        return of([]);
      }),
      finalize(() => {})
    );
  }

  get gridStyle() {
    return {
      'grid-template-columns': `repeat(${this.columns}, 1fr)`,
    };
  }
}
