import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
  },
  {
    path: 'server-error',
    loadComponent: () =>
      import('./pages/internal-server-page/internal-server-page').then((m) => m.InternalServerPage),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products-page/products-page').then((m) => m.ProductsPage),
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/product-page/product-page').then((m) => m.ProductPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page').then((m) => m.NotFoundPage),
  },
];
