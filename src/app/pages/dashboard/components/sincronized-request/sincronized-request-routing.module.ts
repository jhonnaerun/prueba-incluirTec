import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SincronizedRequestPage } from './sincronized-request.page';

const routes: Routes = [
  {
    path: '',
    component: SincronizedRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SincronizedRequestPageRoutingModule {}
