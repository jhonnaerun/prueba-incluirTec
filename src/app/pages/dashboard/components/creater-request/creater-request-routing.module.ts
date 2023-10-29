import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaterRequestPage } from './creater-request.page';

const routes: Routes = [
  {
    path: '',
    component: CreaterRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaterRequestPageRoutingModule {}
