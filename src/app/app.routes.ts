import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { DndComponent } from './components/pages/dnd/dnd.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'adventure',
    component: DndComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
