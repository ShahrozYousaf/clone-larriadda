import { Routes } from '@angular/router';
import { langGuard } from './guards/lang-guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'no/home',
    pathMatch: 'full'
  },
  {
    path: ':lang',
    canActivate: [langGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home').then(m => m.Home)
      },
      {
        path: 'menu',
        loadComponent: () =>
          import('./pages/menu/menu').then(m => m.Menu)
      },
      {
        path: 'items/:item_gcategory',
        loadComponent: () =>
          import('./pages/items/items').then(m => m.Items)
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./pages/checkout/checkout').then(m => m.Checkout)
      },
      {
        path: 'order/:quotation_id',
        loadComponent: () =>
          import('./pages/order/order').then(m => m.Order)
      },
      {
        path: 'ramadanbooking/orders',
        loadComponent: () =>
          import('./pages/ramadanbooking/ramadanbooking').then(m => m.Ramadanbooking)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'no/home'
  }
];