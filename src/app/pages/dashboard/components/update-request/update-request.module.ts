import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRequestPageRoutingModule } from './update-request-routing.module';

import { UpdateRequestPage } from './update-request.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    UpdateRequestPageRoutingModule
  ],
  declarations: [UpdateRequestPage]
})
export class UpdateRequestPageModule {}
