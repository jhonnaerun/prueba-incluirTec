import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreaterRequestPageRoutingModule } from './creater-request-routing.module';

import { CreaterRequestPage } from './creater-request.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CreaterRequestPageRoutingModule
  ],
  declarations: [CreaterRequestPage]
})
export class CreaterRequestPageModule {}
