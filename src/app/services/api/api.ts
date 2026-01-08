import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductSortType } from '../../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly productsApiUrl = 'products';

  constructor(private http: HttpClient) {}

  getProducts(
    sortType: ProductSortType,
    limit: number = 4,
    offset: number = 0
  ): Observable<Product[]> {
    let params = new HttpParams().set('limit', limit.toString()).set('offset', offset.toString());

    switch (sortType) {
      case 'created_at_desc':
        params = params.set('sort', 'created_at').set('order', 'desc');
        break;
      case 'created_at_asc':
        params = params.set('sort', 'created_at').set('order', 'asc');
        break;
      case 'sales_desc':
        params = params.set('sort', 'sales').set('order', 'desc');
        break;
      case 'price_asc':
        params = params.set('sort', 'price').set('order', 'asc');
        break;
      case 'price_desc':
        params = params.set('sort', 'price').set('order', 'desc');
        break;
    }

    return this.http.get<Product[]>(this.productsApiUrl, { params });

    //http://localhost:8080/api/products?limit=4&offset=0&sort=created_at&order=desc
  }
}
