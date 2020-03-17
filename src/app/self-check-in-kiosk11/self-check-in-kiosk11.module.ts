import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk11PageRoutingModule } from './self-check-in-kiosk11-routing.module';

import { SelfCheckInKiosk11Page } from './self-check-in-kiosk11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInKiosk11PageRoutingModule
  ],
  declarations: [SelfCheckInKiosk11Page]
})
export class SelfCheckInKiosk11PageModule {}
