import { langGuard } from './guards/lang-guard';
export const routes = [
    {
        path: '',
        redirectTo: 'no/home',
        pathMatch: 'full'
    },
    {
        path: 'ramadanbooking',
        loadComponent: () => import('./pages/ramadanbooking/ramadanbooking').then(m => m.Ramadanbooking)
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
                loadComponent: () => import('./pages/home/home').then(m => m.Home)
            },
            {
                path: 'menu',
                loadComponent: () => import('./pages/menu/menu').then(m => m.Menu)
            },
            {
                path: 'items/:item_gcategory',
                loadComponent: () => import('./pages/items/items').then(m => m.Items)
            },
            {
                path: 'checkout',
                loadComponent: () => import('./pages/checkout/checkout').then(m => m.Checkout)
            },
            {
                path: 'order',
                loadComponent: () => import('./pages/order/order').then(m => m.Order)
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'no/home'
    }
];
