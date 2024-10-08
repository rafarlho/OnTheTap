import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo:'open-taps'
    },
    {
        path:'open-taps',
        loadComponent: () =>
            import('./core/open-taps/open-taps.component').then(m=>m.OpenTapsComponent)
    }
];
