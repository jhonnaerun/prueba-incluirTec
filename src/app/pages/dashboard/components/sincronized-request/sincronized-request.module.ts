import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SincronizedRequestPageRoutingModule } from './sincronized-request-routing.module';

import { SincronizedRequestPage } from './sincronized-request.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SincronizedRequestPageRoutingModule
  ],
  declarations: [SincronizedRequestPage]
})
export class SincronizedRequestPageModule {}
