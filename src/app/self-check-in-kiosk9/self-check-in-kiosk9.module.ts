import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfCheckInKiosk9PageRoutingModule } from './self-check-in-kiosk9-routing.module';

import { SelfCheckInKiosk9Page } from './self-check-in-kiosk9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfCheckInKiosk9PageRoutingModule
  ],
  declarations: [SelfCheckInKiosk9Page]
})
export class SelfCheckInKiosk9PageModule {}
