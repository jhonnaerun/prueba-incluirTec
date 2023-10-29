import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'crear-solicitud',
        loadChildren: () => import('./components/creater-request/creater-request.module').then( m => m.CreaterRequestPageModule)
      },
      {
        path: 'actualizar-solicitud',
        loadChildren: () => import('./components/update-request/update-request.module').then( m => m.UpdateRequestPageModule)
      },
      {
        path: 'buscar-solicitud',
        loadChildren: () => import('./components/search-request/search-request.module').then( m => m.SearchRequestPageModule)
      },
      {
        path: 'sincronizar-solicitud',
        loadChildren: () => import('./components/sincronized-request/sincronized-request.module').then( m => m.SincronizedRequestPageModule)
      },
      { path: '**', redirectTo: 'dashboard' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
