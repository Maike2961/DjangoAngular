import { Routes } from '@angular/router';
import { ViewsCursoComponent } from './components/views-curso/views-curso.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { UpdateCursoComponent } from './components/update-curso/update-curso.component';

export const routes: Routes = [
    {
        path: '',
        component: ViewsCursoComponent,
    },
    {
        path: 'add',
        component: AddCursoComponent
    },
    {
        path: 'edit/:id',
        component: UpdateCursoComponent
    },
    {
        path: '**',
        redirectTo: '', pathMatch: 'full'
    }
];
