export interface Product {
  id: string;
  image_urls: string;
  name: string;
  review_rating: number;
  review_count: number;
  price_original: number;
  price_current: number;
  created_at: Date;
}

export type ProductSortType =
  | 'created_at_desc'
  | 'created_at_asc'
  | 'sales_desc'
  | 'price_desc'
  | 'price_asc';
