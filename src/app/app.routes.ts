import { Routes } from '@angular/router';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'newapp',
        component: ApplicationListComponent,
    },
    {
        path: 'applicationList',
        component: ListComponent,
    }
];
