import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'books',
        loadComponent: () => import("./pages/books/books.component").then((c) => c.BooksComponent),
    },
    {
        path: 'foods',
        loadComponent: () => import("./pages/foods/foods.component").then((c) => c.FoodsComponent),
    }
];
